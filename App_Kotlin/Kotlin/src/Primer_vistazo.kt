import model.Camara

fun main(args: Array<String>) {


    val amego = "Francisco \'pepepe Chipi"

    println(amego.trimMargin("F"))

    val a = 102455555555000
    val b = a.toByte()
    val c = b.toLong()
    println(b)
    println(c)

    val daysOfWeek = listOf("Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo")
    for((day,index) in daysOfWeek.withIndex()){
        println("$index :$day")
    }

    for(i in 1..5){
        pepitogrillo@ for (x in 1..2){
            if (i.equals(4)) break@pepitogrillo
            println("francisco chipi")
        }
        println("i : $i")
    }


    var rezar = arrayListOf("pepeluna", "pipoluna")



    var pipo:Int =1
    var pepe:Int =2

    var IndiceDeRecetas:ArrayList<Int> = arrayListOf(0)
    IndiceDeRecetas.add(12)
    var j:String?= "pepipto"
    when{
        j.equals("j") -> {
            println(j)
            println("los jotitas")
        }
        j.equals("pete") -> {
            println("los jotones")
        }

    }

val pepeitp="""
""".trimMargin()

    println(pepeitp)

    //CLASESE CHE BOLUDASO
    var Kañon=Camara()
    Kañon.setZoom(3)
    Kañon.setResolution(1080)
    Kañon.setFocus("Si esta con focus che boludo")
    Kañon.setTurnOn(true)

    Kañon.mostrarTodo()

    println("Pepipot -> ${calculation(2,3,54, ::suma)}")
    println("Pepipot -> ${calculation(2,3,54, ::resta)}")
    println("Pepipot -> ${calculation(2,3,54, ::multiplicacion)}")
    println("Pepipot -> ${calculation(2100,105,54, ::division)}")

    val lacucaracha:Any= listOf("pwpw", 4,1.222, "pepito el chocolatero")
    val juancito = hashMapOf("pepe" to 1, 50 to 20)

    println(juancito)
}

fun calculation(a:Int, b:Int, c:Int, peracion:(Int,Int,Int) -> Int ):Int{
    return peracion(a,b,c)


}

fun suma(a:Int,b:Int,c:Int) = a+b+c
fun resta(a:Int,b:Int,c:Int) = a-b-c
fun multiplicacion(a:Int,b:Int,c:Int) = a*b*c
fun division(a:Int,b:Int,c:Int) = (a/b)%c

val pepepepe = a[1,2,3]



/*
* Expresión 	Función 	Se traduce a
a + b 	plus 	a.plus(b)
a - b 	minus 	a.minus(b)
a * b 	times 	a.times(b)
a / b 	div 	a.div(b)
a % b 	mod 	a.mod(b)
a += b 	a = a + b 	a.plusAssign(b)
a -= b 	a = a - b 	a.minusAssign(b)
a *= b 	a = a * b 	a.timesAssign(b)
a /= b 	a = a / b 	a.divAssign(b)
a %= b 	a = a % b 	a.modAssign(b)
Operador 	Significado 	Expresión 	Se traduce a
+ 	Suma unaria 	+a 	a.unaryPlus()
- 	Resta unaria 	-a 	a.unaryMinus()
! 	Negación 	!a 	a.not()
++ 	Incremento 	++a 	a.inc()
-- 	Decremento 	--a 	a.dec()
*
* */