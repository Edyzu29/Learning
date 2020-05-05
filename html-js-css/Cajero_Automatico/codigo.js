class Billetes {
    constructor(v, c) {
        this.valor = v;
        this.cant = c;
    }

}

var caja = [];
var plata_entregar = [];

caja.push(new Billetes(200, 30));
caja.push(new Billetes(100, 40));
caja.push(new Billetes(50, 50));
caja.push(new Billetes(20, 60));
caja.push(new Billetes(10, 70));

var maximos = [];
for (x of caja) maximos.push(x.cant);


var plata_cruda = document.getElementById("dinero_solicitado");
var plata;

var conteo_de_billetes = document.getElementById("conteo_de_billetes");
for (x in caja) {
    conteo_de_billetes.innerHTML += caja[x].valor + " <meter max=\"" + maximos[x] + "\" value=\"" + maximos[x] + "\"></meter>" + "<br/>";
}

var utlimo_parrafo = document.getElementById("utlimo_parrafo");

var boton_inicio = document.getElementById("start");
boton_inicio.addEventListener("click", Proceso);

var n_billetes;
function Proceso() {
    plata = parseInt(plata_cruda.value);
    for (x of caja) {
        if ((plata > 0) && ((plata%10)==0)) {
            n_billetes = Math.floor(plata / x.valor);
            if (!(n_billetes <= x.cant)) {
                n_billetes = x.cant;
            }
            plata -= (n_billetes * x.valor);
            x.cant -= n_billetes;
            plata_entregar.push(new Billetes(x.valor, n_billetes));
        } else if( !(plata%10)==0) {
            alert("Reincie la Pagina y Lea las instruccioness");
        }
    }
    utlimo_parrafo.innerHTML = "";
    if (plata > 0) {
        utlimo_parrafo.innerHTML += "No hay plata mi arma";
    } else {
        conteo_de_billetes.innerHTML ="";
        for (x in caja) {
            conteo_de_billetes.innerHTML += caja[x].valor + " <meter max=\"" + maximos[x] + "\" value=\"" + caja[x].cant + "\"></meter>" + "<br/>";
        }
        for (e of plata_entregar) {
            if (e.cant != 0) {
                for (var i = 1; i <= e.cant; i++) {
                    utlimo_parrafo.innerHTML += "<img src=\"Soles_" + e.valor + ".jpg\"/>";
                }
                utlimo_parrafo.innerHTML += "<br/>";
                utlimo_parrafo.innerHTML += "<hr/>";
            }
        }
    }
    utlimo_parrafo.innerHTML += "<hr/><hr/>";
}