import java.util.*
import kotlin.collections.ArrayList

/*---------------------------------------------------------------------------------------------------*/
val listaInsumos = listOf("Agua", "Leche", "Carne", "Verduras", "Frutas", "Cereal", "Huevos", "Aceite")

val mensajeInicial = """     :: Bienvenido a la cocinita De ChipiJulio :: 
        
    Selecciona la opcion deseada
        1. Hacer una receta
        2. Ver recetas
        3. Salir        
        
    Escriba el número deseado
    """.trimIndent()

val mensajeCaso1 = """Eljiste crear una nueva receta
        |Acontinuacion te mostraré los insumos       
       """.trimMargin()
val subMensajeCaso10 = """Toda receta que se respete debe tener nombre
        |¿Comó te gustaría llamarla?
    """.trimMargin()
val subMensajeCaso11 = """Escriba el nombre del Insumo para agregarlo a la receta
    """.trimIndent()
val subMensajeCaso12 = """Para terminar la receta, escriba Fin
    """.trimMargin()

val mensajeCaso2 = """Estas son tus recetas
    """.trimMargin()
val subMensajeCaso2 = """Para ver la siguiente receta, escriba Siguiente
        |Para volver a la pantalla de inicio, escriba Volver
    """.trimMargin()

/*---------------------------------------------------------------------------------------------------*/
var datoRecibido: String? = null

var nombresDeRecetas: ArrayList<String?> = ArrayList<String?>()
var ingredientesDeRecetas: ArrayList<String?> = ArrayList<String?>()

var indiceDeRecetas: ArrayList<Int> = arrayListOf(0)
var contador = 0
var index = 0

/*---------------------------------------------------------------------------------------------------*/
val delay: Long = 500

/*---------------------------------------------------------------------------------------------------*/
fun main() {
    RomperTodo@ while (true) {
        println(mensajeInicial)
        datoRecibido = readLine()
        when {
            datoRecibido.equals("1") -> {
                makeRecipes()
            }
            datoRecibido.equals("2") -> {
                viewRecipes()
            }
            datoRecibido.equals("3") -> {
                break@RomperTodo
            }
            else -> {
                println("Vuelva a ingresar el Mensaje")
                Thread.sleep(delay)
            }
        }
    }
}
/*---------------------------------------------------------------------------------------------------*/
fun makeRecipes() {
    println(mensajeCaso1)
    Thread.sleep(delay * 3 / 2)
    for ((indice, producto) in listaInsumos.withIndex()) {
        println("${indice + 1}. $producto")
        Thread.sleep(delay)
    }
    println(subMensajeCaso10)
    datoRecibido = readLine()
    nombresDeRecetas.add(datoRecibido)
    println("Su receta se llamará $datoRecibido \n")
    Thread.sleep(delay)
    println(subMensajeCaso11)
    RomperCiclo@ while (true) {
        datoRecibido = readLine()
        when {
            listaInsumos.contains(datoRecibido) -> {
                contador++
                ingredientesDeRecetas.add(datoRecibido)
                Thread.sleep(delay)
                println(subMensajeCaso12)
                Thread.sleep(delay)
                println("Insumo apuntado, quiere agregar otro?")
            }
            datoRecibido.equals("Fin") -> {
                break@RomperCiclo
            }
            else -> {
                println("El insumo no esta detro de la lista")
                Thread.sleep(delay)
            }
        }
    }
    indiceDeRecetas.add(contador)
}

fun viewRecipes() {
    println(mensajeCaso2)
    RomperClico@ while (true) {
        var numerador = 1
        println(nombresDeRecetas[index])
        for (recetas in indiceDeRecetas[index]..(indiceDeRecetas[index + 1] - 1)) {
            println("${numerador++}. ${ingredientesDeRecetas[recetas]}")
            Thread.sleep(delay)
        }
        println(subMensajeCaso2)
        datoRecibido = readLine()
        when {
            datoRecibido.equals("Siguiente") -> {
                index++
            }
            datoRecibido.equals("Volver") -> {
                break@RomperClico
            }
            else -> {
                print("El mensaje Ingresado no es el adecudao")
                Thread.sleep(delay)
            }
        }
    }
}

open class Pepito

val Julito = Pepito()
