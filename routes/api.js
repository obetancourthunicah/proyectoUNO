var express = require('express');
var apirouter = express.Router();

function api(db){
    //Colecciones
    //http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html
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
            var query = {"isbn": req.params.isbn};
            libros.findOne(query, function(err, doc){
                if(err){
                    res.status(500).json({"error":err});
                }else{
                    res.status(200).json({"libro":doc});
                }
            });

        }
    ) // obtenerLibro

    apirouter.post("/modificarLibro/:isbn",
        function(req, res){
            var query = {"isbn": req.params.isbn};
            var upd = {"$set":{"titulo":req.body.titulo}};

            libros.updateOne(query,upd,{w:1},function(err, doc){
                if(err){
                    res.status(500).json({"error":err});
                }else{
                    res.status(200).json({"libro":doc});
                }
            });
        }
    ) // modificarLibro

    apirouter.put("/agregarLibro",
        function(req, res){
            console.log(req.body);
            var newLibro = {};
            newLibro.isbn = req.body.isbn;
            newLibro.titulo = req.body.titulo;
            libros.insertOne(newLibro, function(err, doc){
                if(err){
                    res.status(500).json({"error":err});
                }else{
                    res.status(200).json({"libro":doc});
                }
            });
        }
    ) // agregarLibro
    //eliminarLibro/089373546718
    //req.parms.isbn
    apirouter.delete("/eliminarLibro/:isbn",
        function(req, res){
            var query = {"isbn": req.params.isbn};
            libros.deleteOne(query,{w:1},function(err, doc){
                if(err){
                    res.status(500).json({"error":err});
                }else{
                    res.status(200).json({"libro":doc});
                }
            } );
        }
    ) // eliminarLibro
    return apirouter;
}

module.exports = api;
