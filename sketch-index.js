function cambia() {
  var nombre = document.getElementById("nombre").value;
  var edad = document.getElementById("edad").value;
  var mes = document.getElementById("mes").value;
  var tamano;
  if (edad <12 || edad>60){
    tamano = "xx-large";
  } else {
    tamano = "large";
  }
 console.log(nombre + " " + edad + " " + mes);
document.getElementById("pie").innerText=nombre +" bendiciones";
document.getElementById("frase").style.fontSize=tamano;
document.body.style.backgroundColor = mes;

if (edad <12 || edad>60){
  tamano = "xx-large";
} else {
  tamano = "large";
}

}
