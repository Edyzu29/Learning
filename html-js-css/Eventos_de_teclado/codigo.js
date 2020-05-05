var d = document.getElementById("Area_Dibujo");
var lienzo = d.getContext("2d");
var situacion = false;

var rectificar_ejes = [7, 100];
var x_mouse_canvas;
var y_mouse_canvas;

document.addEventListener("keydown", Dibujar_Con_Flechas);

document.addEventListener("mousedown", Empezar_Dibujo);
document.addEventListener("mousemove", Seguir_Dibujando);
document.addEventListener("mouseup", Acabar_Dibujo);

function Empezar_Dibujo(){
    situacion = true;
}

function Seguir_Dibujando(evento) {
    x_mouse_canvas = evento.x - rectificar_ejes[0];
    y_mouse_canvas = evento.y - rectificar_ejes[1];

    if(situacion){
        dibujar_linea("yellow", x_mouse_canvas - 2, y_mouse_canvas, x_mouse_canvas + 2, y_mouse_canvas);
        dibujar_linea("yellow", x_mouse_canvas, y_mouse_canvas - 2, x_mouse_canvas, y_mouse_canvas + 2);
        dibujar_linea("yellow", x_mouse_canvas - 2, y_mouse_canvas - 2, x_mouse_canvas + 2, y_mouse_canvas + 2);
        dibujar_linea("yellow", x_mouse_canvas - 2, y_mouse_canvas + 2, x_mouse_canvas + 2, y_mouse_canvas - 2);
    }    
}

function Acabar_Dibujo(){
    situacion = false;
}


function Dibujar_Con_Flechas(evento) {
    Seleccionar_Flecha(evento.keyCode);
}

/* ========================================================================== */
/* Funcion para hacer flechas dibujos */
/* ========================================================================== */
var d = document.getElementById("Area_Dibujo");
var lienzo = d.getContext("2d");

var origin_previous = [50, 50];
var origin_now = [50, 50];

var y_limit = parseInt(d.width);
var x_limit = parseInt(d.height);

var movimiento = 2;

var Flechas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
}

function Seleccionar_Flecha(boton_comparado) {
    switch (boton_comparado) {
        case Flechas.UP:
            origin_now[1] -= movimiento;
            dibujar_linea("blue", origin_previous[0], origin_previous[1], origin_now[0], origin_now[1]);
            origin_previous[0] = origin_now[0];
            origin_previous[1] = origin_now[1];
            break;

        case Flechas.DOWN:
            origin_now[1] += movimiento;
            dibujar_linea("blue", origin_previous[0], origin_previous[1], origin_now[0], origin_now[1]);
            origin_previous[0] = origin_now[0];
            origin_previous[1] = origin_now[1];
            break;

        case Flechas.LEFT:
            origin_now[0] -= movimiento;
            dibujar_linea("blue", origin_previous[0], origin_previous[1], origin_now[0], origin_now[1]);
            origin_previous[0] = origin_now[0];
            origin_previous[1] = origin_now[1];
            break;

        case Flechas.RIGHT:
            origin_now[0] += movimiento;
            dibujar_linea("blue", origin_previous[0], origin_previous[1], origin_now[0], origin_now[1]);
            origin_previous[0] = origin_now[0];
            origin_previous[1] = origin_now[1];
            break;

    }
}

function dibujar_linea(color, x0, y0, x1, y1) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x0, y0);
    lienzo.lineTo(x1, y1);
    lienzo.stroke();
    lienzo.closePath();
}

//// punto de inico
dibujar_linea("red", origin_previous[0] - 1, origin_previous[1] - 1, origin_previous[0], origin_previous[1]);
dibujar_linea("white", 0, 0, 0, y_limit);
dibujar_linea("white", 0, 0, x_limit, 0);
dibujar_linea("white", x_limit, y_limit, x_limit, 0);
dibujar_linea("white", x_limit, y_limit, 0, y_limit);
/* ========================================================================== */
/* ========================================================================== */
/* ========================================================================== */