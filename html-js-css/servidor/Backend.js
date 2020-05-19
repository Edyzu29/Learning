var julito = require("express");
var frunas = julito();

frunas.get("/",Francisco);
frunas.get("/Francisco...", pepe)


function Francisco(requerimiento, respuesta){
    respuesta.send("Francisco chipi");
}

function pepe(requerimiento, respuesta){
    respuesta.send("yo te queiro decir que... DONDE ESTA MI PUTA PLATA PUTO");
}

frunas.listen(8989);