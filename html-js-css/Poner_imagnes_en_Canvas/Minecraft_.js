var pg = document.getElementById("Playground");
var lienzo = pg.getContext("2d");

var mapa = {
    Url: "tile.webp",
    CargaOk: false
};
mapa.imagen = new Image();
mapa.imagen.src = mapa.Url;
mapa.imagen.addEventListener("load", Cargarmapa);

var vaca = {
    Url: "vaca.webp",
    CargaOk: false,
    x: [Aleatorio(0, 5) * 80, Aleatorio(0, 5) * 80, Aleatorio(0, 5) * 80, Aleatorio(0, 5) * 80, Aleatorio(0, 5) * 80],
    y: [Aleatorio(0, 5) * 80, Aleatorio(0, 5) * 80, Aleatorio(0, 5) * 80, Aleatorio(0, 5) * 80, Aleatorio(0, 5) * 80],
    cant: Aleatorio(1, 3)
};
vaca.imagen = new Image();
vaca.imagen.src = vaca.Url;
vaca.imagen.addEventListener("load", Cargarvaca);

var cerdo = {
    Url: "cerdo.webp",
    CargaOk: false,
    x: [Aleatorio(0, 5) * 80, Aleatorio(0, 5) * 80, Aleatorio(0, 5) * 80, Aleatorio(0, 5) * 80, Aleatorio(0, 5) * 80],
    y: [Aleatorio(0, 5) * 80, Aleatorio(0, 5) * 80, Aleatorio(0, 5) * 80, Aleatorio(0, 5) * 80, Aleatorio(0, 5) * 80],
    cant: Aleatorio(1, 4)
};
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.Url;
cerdo.imagen.addEventListener("load", Cargarcerdo);

var pollo = {
    Url: "pollo.webp",
    CargaOk: false,
    x: [Aleatorio(0, 5) * 80, Aleatorio(0, 5) * 80, Aleatorio(0, 5) * 80, Aleatorio(0, 5) * 80, Aleatorio(0, 5) * 80],
    y: [Aleatorio(0, 5) * 80, Aleatorio(0, 5) * 80, Aleatorio(0, 5) * 80, Aleatorio(0, 5) * 80, Aleatorio(0, 5) * 80],
    cant: Aleatorio(3, 10)
};
pollo.imagen = new Image();
pollo.imagen.src = pollo.Url;
pollo.imagen.addEventListener("load", Cargarpollo);

var euin = {
    Url: "Euin.png",
    CargaOk: false,
    x: 250,
    y: 250
}
euin.imagen = new Image();
euin.imagen.src = euin.Url;
euin.imagen.addEventListener("load", Cargareuin);

var Flechas = {
    Movement: 10,
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39

}
document.addEventListener("keydown", Mover_Flechas);

function Mover_Flechas(boton_comparado) {
    switch (boton_comparado.keyCode) {
        case Flechas.UP:
            euin.y -= Flechas.Movement;
            break;

        case Flechas.DOWN:
            euin.y += Flechas.Movement;
            break;

        case Flechas.LEFT:
            euin.x -= Flechas.Movement;
            break;

        case Flechas.RIGHT:
            euin.x += Flechas.Movement;
            break;

    }
    Colicion();
    console.log("Posicon X " + euin.x + "\n\r Posicon Y " + euin.y);
    dibujar();
}

function Cargarmapa() {
    mapa.CargaOk = true;
    dibujar();
}
function Cargarvaca() {
    vaca.CargaOk = true;
    dibujar();
}
function Cargarcerdo() {
    cerdo.CargaOk = true;
    dibujar();
}
function Cargarpollo() {
    pollo.CargaOk = true;
    dibujar();
}
function Cargareuin() {
    euin.CargaOk = true;
    dibujar();
}

function dibujar() {
    if (mapa.CargaOk) lienzo.drawImage(mapa.imagen, 0, 0);

    if (vaca.CargaOk) {
        for (var i = 0; i < vaca.cant; i++) {
            lienzo.drawImage(vaca.imagen, vaca.x[i], vaca.y[i]);
        }
    }
    if (cerdo.CargaOk) {
        for (var i = 0; i < cerdo.cant; i++) {
            lienzo.drawImage(cerdo.imagen, cerdo.x[i], cerdo.y[i]);
        }
    }
    if (pollo.CargaOk) {
        for (var i = 0; i < pollo.cant; i++) {
            lienzo.drawImage(pollo.imagen, pollo.x[i], pollo.y[i]);
        }
    }

    if (euin.CargaOk) {
        lienzo.drawImage(euin.imagen, euin.x, euin.y);
    }
    
    
}

function Colicion() {

    for (var i = 0; i < vaca.cant; i++) {
        if ((parseInt(euin.x / 80) == vaca.x[i] / 80) & (parseInt(euin.y / 80) == vaca.y[i] / 80)) alert("cuidado con la vaca");
    }
    for(var i=0; i<=cerdo.cant;i++){
        if ((parseInt(euin.x / 80) == cerdo.x[i] / 80) & (parseInt(euin.y / 80) == cerdo.y[i] / 80)) alert("cuidado con la cerdo");
    }
    for(var i=0; i<=pollo.cant;i++){
        if ((parseInt(euin.x / 80) == pollo.x[i] / 80) & (parseInt(euin.y / 80) == pollo.y[i] / 80)) alert("cuidado con la pollo");
    }

}


function Aleatorio(min, max) {
    var solucion;

    solucion = Math.floor(Math.random() * (max - min + 1)) + min;

    return solucion;
}

console.log("-----------");
console.log("Cerdo");
console.log(cerdo.x, cerdo.y);
console.log("-----------");
console.log("Vaca");
console.log(vaca.x, vaca.y);
console.log("-----------");
console.log("Pollo");
console.log(pollo.x, pollo.y);
console.log("-----------");