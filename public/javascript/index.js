//Index Behavior'

console.log("Javascript Loaded");


$("#pag1").on("pagecreate",function(e){
    var librosList = $("#librosList");
    $.ajax("api/v0/obtenerlibros",
            {
                "method":"GET",
                "data":{},
                "dataType":"json",
                "success":function(jsonDoc,status,jqXHR){
                    console.log(jsonDoc);
                    var htmlstr = "";
                    for(var i = 0 ; i < jsonDoc.libros.length; i++){
                        htmlstr += '<li><a href>'+jsonDoc.libros[i].titulo+'</a><li>'
                    }
                    librosList.html(htmlstr).listview("refresh");

                },
                "error":function(jqXHR,status, errorMsg){
                    console.log(errorMsg);
                }

            }
        );
});
