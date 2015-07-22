var express = require('express');
var apirouter = express.Router();

function api(db){
    //Colecciones
    var libros = db.collection("libros");
    //Rutas
    apirouter.get("/obtenerlibros",
        function(req, res){
            var query = {};
            libros.find(query).toArray(function(err, vLibros){
                if(err){
                    res.status(500).json({"error":err});
                }else{
                    res.status(200).json({"libros":vLibros});
                }
            }) // libros.find toarray 
        }
    ) // obtenerLibros
    apirouter.get("/obtenerLibro/:isbn",
        function(req, res){
            res.status(500).json({"error":"Función no Implementada"});
        }
    ) // obtenerLibro

    apirouter.post("/modificarLibro/:isbn",
        function(req, res){
            res.status(500).json({"error":"Función no Implementada"});
        }
    ) // modificarLibro

    apirouter.put("/agregarLibro",
        function(req, res){
            res.status(500).json({"error":"Función no Implementada"});
        }
    ) // agregarLibro
    //eliminarLibro/089373546718
    //req.parms.isbn
    apirouter.delete("/eliminarLibro/:isbn",
        function(req, res){
            res.status(500).json({"error":"Función no Implementada"});
        }
    ) // eliminarLibro
    return apirouter;
}

module.exports = api;
