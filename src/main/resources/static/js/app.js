/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//CREAR MODULO
var Module = (function () {
// code
var nombre;
        var nom_pun = [];
        
        return{
        setBlueprintsByName: function (authname) {
        nombre = authname;
        },
                setActualizar:function(authname){
                apimock.getBlueprintsByAuthor(authname, function(lista){
                nom_pun = lista;
                        // listado de los planos, y le aplique una función 'map' convertir json
                        var lista1 = nom_pun.map(function(blue){
                        return{"nombre":blue.nombre, "tamano":blue.points.length}; }
                        );
                        //otro 'map', que tome cada uno de estos elementos, y a través de jQuery agregue un elemento <tr> (con los respectvos <td>)
                        var lista2 = lista1.map(function(valor){
                        return "<tr><td>" + valor.nombre + "</td>\n\<td>" + valor.tamano + "</td></tr>";
                        });
                        // aplique un 'reduce' que calcule el número de puntos. Con este valor, use jQuery para actualizar el campo correspondiente
                        var reduce = lista1.reduce(function(suma, value){
                        return suma.points.length + value.points.length;
                        }
                        );
                }
                );
             }
         };
    })();



