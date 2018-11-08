$(function() {

 				$("#pesan_error_npm").hide();
 				$("#pesan_error_nama").hide();
 				$("#pesan_error_tglLahir").hide();

 				var npm_error = false;
 				var nama_error = false;
 				var tglLahir_error = false;

 				$("#textNPM").focusout(function(){
 					cek_npm();
 				});

 				$("#textName").focusout(function(){
 					cek_nama();
 				});

 				$("#textTgl").focusout(function(){
 					cek_tglLahir();
 				});

 				$("#formInput").submit(function(){

 					npm_error = false;
 					nama_error = false;
 					tglLahir_error = false;

 					cek_npm();
 					cek_nama();
 					cek_tglLahir();

 					if (npm_error == false && nama_error == false && tglLahir_error == false) {
 						alert("Berhasil");
 						return true;
 					} else {
 						return false;
 					}
 				
 				});

 				function cek_npm() {
 					var npm = $("#textNPM").val();

 					if (npm !=='') {
 						$("#pesan_error_npm").hide();
 					} else {
 						$("#pesan_error_npm").html("NPM tidak boleh kosong");
 						$("#pesan_error_npm").show();
 						npm_error = true;
 					}
 				}

 				function cek_nama() {
 					var nama = $("#textName").val();

 					if (nama !=='') {
 						$("#pesan_error_nama").hide();
 					} else {
 						$("#pesan_error_nama").html("Nama tidak boleh kosong");
 						$("#pesan_error_nama").show();
 						nama_error = true;
 					}
 				}

 				function cek_tglLahir() {
 					var tglLahir = $("#textTgl").val();

 					if (tglLahir !=='') {
 						$("#pesan_error_tglLahir").hide();
 					} else {
 						$("#pesan_error_tglLahir").html("Tanggal lahir tidak boleh kosong");
 						$("#pesan_error_tglLahir").show();
 						tglLahir_error = true;
 					}
 				}
 			});