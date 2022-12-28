function encriptar() {
  document.getElementById("section2-elementos").style.display = "none";

  var inputsc2 = document.getElementById("section2-textarea");
  inputsc2.style.cssText =
    "display:block; font-family: 'Inter';font-style: normal;font-weight: 400;font-size: 24px;line-height: 150%;color: #495057;border:none; padding:0;width:80%;height:80%;position:relative;";

  var pasartexto = document
    .getElementById("section1-textarea")
    .value.toLowerCase();

  var cifrar = pasartexto.replace(/e/gim, "enter");
  var cifrar = cifrar.replace(/o/gim, "ober");
  var cifrar = cifrar.replace(/i/gim, "imes");
  var cifrar = cifrar.replace(/a/gim, "ai");
  var cifrar = cifrar.replace(/u/gim, "ufat");

  document.getElementById("section2-textarea").value = cifrar;

  var btncopiar = document.getElementById("boton-copiar");

 btncopiar.style.cssText = "display:block;";



}

function desencriptar() {
  /* document.getElementById("section2-elementos").style.display = "none"; */

  var inputsc2 = document.getElementById("section2-textarea");
  inputsc2.style.cssText =
    "display:block; font-family: 'Inter';font-style: normal;font-weight: 400;font-size: 24px;line-height: 150%;color: #495057;border:none; padding:0;width:80%;height:80%;position:relative;";

  var pasartexto = document
    .getElementById("section1-textarea")
    .value.toLowerCase();

  var cifrar = pasartexto.replace(/enter/gim, "e");
  var cifrar = cifrar.replace(/ober/gim, "o");
  var cifrar = cifrar.replace(/imes/gim, "i");
  var cifrar = cifrar.replace(/ai/gim, "a");
  var cifrar = cifrar.replace(/ufat/gim, "u");

  document.getElementById("section2-textarea").value = cifrar;

  var btncopiar = document.getElementById("boton-copiar");
  btncopiar.style.cssText =
    "display:block;";


}

function copiar(){

var inputsc2 = document.getElementById("section2-textarea");
inputsc2.select();
document.execCommand("copy");
alert("se copió");

}