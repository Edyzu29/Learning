package model

class Camara {
    private var isOn: Boolean = false
    private var resolution: Int = 640
    private var zoom: Int = 1
    private var focus: String = "si"

    fun setTurnOn(onoff:Boolean){
        isOn=onoff
    }
    fun getTurnOn(){
        if(isOn){
            println("La Camara ta prendida che")
        }else{
            println("La Camara no ta prendida che")
        }
    }

    fun setResolution(resolution: Int){
        this.resolution=resolution
    }
    fun getResolution(){
        println("La resolucion es $resolution che")
    }

    fun setZoom(zoom: Int){
        this.zoom=zoom
    }
    fun getZoom(){
        println("La resolcuion es x$zoom che")
    }

    fun setFocus(focuseado: String){
        focus=focuseado
    }
    fun getFocus(){
        if(focus.contains("si")||focus.contains("Si")){
            println("La Camara ta enfoncado che")
        }else{
            println("La Camara no ta enfocnado boludoooo")
        }
    }

    fun mostrarTodo(){
        getFocus()
        getResolution()
        getTurnOn()
        getZoom()
    }
}