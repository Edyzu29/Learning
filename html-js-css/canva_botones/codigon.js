var d = document.getElementById("dibujon");
var lienzo = d.getContext("2d");
var tecto = document.getElementById("texte_lineas");
var color1 = document.getElementById("texte_color1");
var color2 = document.getElementById("texte_color2");
var color3 = document.getElementById("texte_color3");
var color4 = document.getElementById("texte_color4");
var puton = document.getElementById("button_enviar_lineas");
var puton_clear = document.getElementById("button_enviar_borrar");
var ancho = d.width;
var i;

puton.addEventListener("click", cosa_bien_hecha);
puton_clear.addEventListener("click", cosa_mal_techa);

uili_tubular("white", 0, 0, 0, ancho);
uili_tubular("white", ancho, 0, ancho, ancho);




function cosa_bien_hecha() {
    Thunder_eye(color1.value,color2.value,color3.value,color4.value,parseInt(tecto.value));
}

function cosa_mal_techa(){
    lienzo.clear;
}


function Thunder_eye(a, b, c, d, n_lineas) {
    for (i = 0; i < n_lineas; i++) {
        uili_tubular(a, 0, (ancho/n_lineas) * i, (ancho/n_lineas) * (i + 1), ancho);
    }

    for (i = 0; i < n_lineas; i++) {
        uili_tubular(b, (ancho/n_lineas) * i, ancho, ancho, ancho - (ancho/n_lineas) * (i + 1));
    }

    for (i = 0; i < n_lineas; i++) {
        uili_tubular(c, ancho, ancho - (ancho/n_lineas) * i, ancho - (ancho/n_lineas) * (i + 1), 0);
    }

    for (i = 0; i < n_lineas; i++) {
        uili_tubular(d, ancho - (ancho/n_lineas) * i, 0, 0, (ancho/n_lineas) * (i + 1));
    }
}

function uili_tubular(color, x0, y0, x1, y1) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x0, y0);
    lienzo.lineTo(x1, y1);
    lienzo.stroke();
    lienzo.closePath();
}