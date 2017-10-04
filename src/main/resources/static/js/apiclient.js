/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//mÃ³dulo provisto (apimock.js)
apiclient = (function () {

    //console.log(nuevosPuntos);

    var request1Response = "";
    var request2Response = "";
    putForumPost = function (blueprint) {
        console.log(blueprint);

        var putPromise = $.ajax({
            url: "/blueprints/"+blueprint,
            type: 'PUT',
            data: JSON.stringify(blueprint),
            contentType: "application/json"
        });
        putPromise.then(
                function () {
                    console.info("OK");
                },
                function () {
                    console.info("ERROR");
                }

        );
        return putPromise;
    };
    var usersGet = function (autor1,nombre1) {
        var promise = $.get("/blueprints/" + autor1 + "/" + nombre1);
        promise.then(
                function (data) {
                    request1Response = data;
                },
                function () {
                    alert("$.get failed!");
                }
        );
        return promise;
    };
    var finalAction = function () {
        alert("Collected data:\nAPI#1:" + JSON.stringify(request1Response) + "\n=======\nAPI #2:" + JSON.stringify(request2Response));
    };
    var anotherUsersGet = function () {
        var promise = $.get("/blueprints/" + autor1 + "/" + nombre1);
        promise.then(
                function (data) {
                    request2Response = data;
                },
                function () {
                    alert("$.get failed!");
                }
        );
        return promise;
    };
    //public functions

    return {
        getBlueprintsByAuthor: function (authname, callback) {

            $.get("/blueprints/" + authname, callback);
        },
        getBlueprintsByNameAndAuthor: function (authname, bpname, callback) {

            $.get("/blueprints/" + authname + "/" + bpname, callback);
        },
        putActualiza: function (blueprint, nuevosPuntos, autor1, nombre1) {
           putForumPost(blueprint,nuevosPuntos)
                    .then(usersGet(autor1,nombre1))
                    .then(finalAction);

            //private functions


            //With promises

////            //Without promises
////            usersGet();
////            putForumPost();
////            anotherUsersGet();
////            finalAction();
//
//                }
//
//
//                };
//        }



            }
        
    };
    }       
)();