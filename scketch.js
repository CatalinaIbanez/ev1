var slider, parrafos, dato;

function setup(){
    noCanvas();
    slider = createsSlider(12,36,24);
    slider.parent("aqui");
    //así se comenta en JS
    parrafos = selectAll("p");
    datos = parrafos[parrafos.lenght - 1];
    dato.style("font-weight", "bold");
    slider.input(cuerpoTipo);

}

function cuerpoTipo() {
    parrafos.forEach(function (x) {
       x.style("font-size", slider.value() + "px")
    });
    dato.html(slider.value() + "px");
}
