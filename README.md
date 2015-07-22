#Proyecto UNO

##Enlace de Base de Datos con mongodb Driver
1. En la carpeta del proyecto ejecutar ```npm install mongodb --save ```, esto instalará el driver necesario para conectarse a la base de datos mongodb.

http://mongodb.github.io

function clase(){
    this.obtenerClases = function(handlerParam){
        var clases = new Array();
        handlerParam(null, clases);
    }
}

clase.obtenerClases(function(error, misClases){

    });
