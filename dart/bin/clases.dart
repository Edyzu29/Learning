import 'dart:ffi';

class Autos {
  int asientos;
  String modelo;
  String marca;
  int _gasolina = 0;

  void set repostar(int gasolina) => _gasolina = gasolina;
  int get mostarGasolina => _gasolina;
}

abstract class Integrante {
  int id;
  String name;
  int phonenumber;
  int horasTrabajando;
  String puesto;

  double Sueldo([multiplo_ganacias = 5.3]) =>
      this.horasTrabajando * multiplo_ganacias;
}

class Gestion extends Integrante {}

class Marketing extends Integrante {}

class Revista extends Integrante {}
