/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global apimock */
/* global apiclient */

var prueba;
var api = apiclient;
//CREAR MODULO
var module = (function () {
// code
    var nombre;
    var nom_pun;
    var listaAutor;
    var nombre_Plano;
    var nuevosPuntos;
    var autorblue;
    var nomb;
//    var canvas = document.getElementById("canvas");
//    var canvas = document.getElementById("canvas");
//    var ctx = canvas.getContext("2d");
//    canvas.width = canvas.width;
//    ctx.fillStyle = "#0080FF";

    return{
        //function to initialize application
        init: function () {

            console.info('initialized');
            if (window.PointerEvent) {
                canvas.addEventListener("pointerdown",
                        function (event) {
                            alert('pointerdown at ' + event.pageX + ',' + event.pageY);
                            var x = {"x": event.pageX - 960, "y": event.pageY - 203};
                            listaAutor.points.push(x);
                            module.setDibujar1(autorblue,nomb);
                          

                        });
            } else {
                canvas.addEventListener("mousedown", function (event) {
                    alert('mousedown at ' + event.clientX + ',' + event.clientY);

                }
                );
            }
        },
        setBlueprintsByName: function (authname) {
            nombre = authname;
        },
        setActualizar: function (autor) {
            module.setBlueprintsByName(autor);
            api.getBlueprintsByAuthor(nombre, function (lista) {
                nom_pun = lista;
                // listado de los planos, y le aplique una función 'map' convertir json
                var lista1 = nom_pun.map(function (blue) {
                    return{"name": blue.name, "tamano": blue.points.length};
                }
                );
                //otro 'map', que tome cada uno de estos elementos, y a través de jQuery agregue un elemento <tr> (con los respectvos <td>)
                var lista2 = lista1.map(function (valor) {
//                   

                    var boton = "<button type='button' onclick=\"module.setDibujar(\'" + nombre + "\',\'" + valor.name + "\')\">open </buttom>"
                    return "<tr  class='temp'><td id=''>" + valor.name + "</td><td>" + valor.tamano + "</td><td>" + boton + "</td></tr>";
                });

                // aplique un 'reduce' que calcule el número de puntos. Con este valor, use jQuery para actualizar el campo correspondiente
                var adicion = lista1.reduce(function (valor, value) {
                    return valor + value.tamano;
                }
                );

                console.log(lista2);
                $(".temp").remove();
                $("table tbody").append(lista2);
//                $("Total de puntos").text(+ adicion);
            }
            );
        },
        setDibujar: function (autor1, nombre1) {

            api.getBlueprintsByNameAndAuthor(autor1, nombre1, function (lista1) {
                
//            if (listaAutor == null&& autor1!=autorblue && nombre1!=nomb) {
                      listaAutor = lista1;
            //  }
                prueba = lista1;
                autorblue = autor1;
                nomb = nombre1;
                var canvas = document.getElementById("canvas");
                ctx = canvas.getContext("2d");
                canvas.width = canvas.width;
                ctx.fillStyle = "#0080FF";
                for (i = 0; i < listaAutor.points.length - 1; i++) {
                    var x = listaAutor.points[i].x;
                    var y = listaAutor.points[i].y;
                    var x2 = listaAutor.points[i + 1].x;
                    var y2 = listaAutor.points[i + 1].y;
                    console.log(listaAutor.points[i].x);


                    ctx.moveTo(x, y);
                    ctx.lineTo(x2, y2);
                    ctx.stroke();
                }

            });
        },
        setDibujar1: function (autor1, nombre1 ){

           // api.getBlueprintsByNameAndAuthor(autor1, nombre1, function (lista1) {
                
          
               
                autorblue = autor1;
                nomb = nombre1;
                var canvas = document.getElementById("canvas");
                ctx = canvas.getContext("2d");
                canvas.width = canvas.width;
                ctx.fillStyle = "#0080FF";
                for (i = 0; i < listaAutor.points.length - 1; i++) {
                    var x = listaAutor.points[i].x;
                    var y = listaAutor.points[i].y;
                    var x2 = listaAutor.points[i + 1].x;
                    var y2 = listaAutor.points[i + 1].y;
                    console.log(listaAutor.points[i].x);


                    ctx.moveTo(x, y);
                    ctx.lineTo(x2, y2);
                    ctx.stroke();
                }

        },
    
        
        save: function (autorblue, nomb,nuevosPuntos) {

          putActualiza(autorblue, nomb,nuevosPuntos);

        }




    };
})();


