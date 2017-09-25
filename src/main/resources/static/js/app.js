/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//CREAR MODULO
var module = (function () {
// code
    var nombre;
    var nom_pun;

    return{
        setBlueprintsByName: function (authname) {
            nombre = authname;
        },
        setActualizar: function (autor) {
            module.setBlueprintsByName(autor);
            apimock.getBlueprintsByAuthor(nombre, function (lista) {
                nom_pun = lista;
                // listado de los planos, y le aplique una función 'map' convertir json
                var lista1 = nom_pun.map(function (blue) {
                    return{"name": blue.name, "tamano": blue.points.length};
                }
                );
                //otro 'map', que tome cada uno de estos elementos, y a través de jQuery agregue un elemento <tr> (con los respectvos <td>)
                var lista2 = lista1.map(function (valor) {
                    return "<tr><td>" + valor.name + "</td>\n\<td>" + valor.tamano + "</td></tr>";
                });
                // aplique un 'reduce' que calcule el número de puntos. Con este valor, use jQuery para actualizar el campo correspondiente
                var adicion = lista1.reduce(function (valor, value) {
                    
                    return valor+value.tamano;
                }
                );
                $("table").append(lista1);
                $("Total de puntos").text(+ adicion);
            }
            );
        }
    };
})();



