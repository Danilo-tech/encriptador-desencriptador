function encriptar() {
 document.getElementById("section2-elementos").style.display = "none";

  var inputsc2 = document.getElementById("section2-textarea");
  inputsc2.style.cssText =
    "display:block; font-family: 'Inter';font-style: normal;font-weight: 400;font-size: 24px;line-height: 150%;color: #495057;border:none; padding:0;width:80%;height:80%;position:relative;";



  var pasartexto = document.getElementById("section1-textarea").value.toLowerCase();


var cifrar = pasartexto.replace(/e/igm,"enter");
var cifrar = cifrar.replace(/o/igm,"ober");
var cifrar = cifrar.replace(/i/igm,"imes");
var cifrar = cifrar.replace(/a/igm,"ai");
var cifrar = cifrar.replace(/u/igm,"ufat");

  document.getElementById("section2-textarea").value = cifrar;

  var btncopiar = document.getElementById("boton-copiar");

  btncopiar.style.cssText =
    "display:block;background: #D8DFE8;border: 1px solid #0A3871; border-radius: 24px;color: #0A3871;box-sizing: border-box; width: 22rem;height: 4rem;font-family: 'Inter';font-style: normal;font-weight: 400;font-size: 16px;line-height: 19px;position:absolute; bottom:7.9rem;";
}

