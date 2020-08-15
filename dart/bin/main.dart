import 'dart:ffi';
import 'clases.dart';

void main() {
  Uint16 pepitogrillo;
  String pepongrillo = "Y el logo?";

  List<String> Papazagrillo = [
    "Rosa",
    "La rosa",
    "La guatemanteca",
    "MAKAKUUUUUUU"
  ];

  print(pepongrillo.isEmpty);
  print(Papazagrillo);
  Papazagrillo.removeLast();
  print(Papazagrillo);

  Set Haru = {"pepe", 02, "Kill the kill"};

  print(Haru);

  Haru.add("pericobarrio");
  print(Haru);

  Haru.forEach((valor) {
    if (valor == "pepe") {
      print("Francisco Chipi");
    }
  });
  Autos Harucar = Autos()
    ..asientos = 5
    ..marca = "mercedes"
    ..modelo = "bigcar";
  Harucar.repostar = 20;

  print("La gasolina tiene ${Harucar.mostarGasolina} ");
}
