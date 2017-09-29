/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//módulo provisto (apimock.js)
apiclient= (function () {



    return {
        getBlueprintsByAuthor: function (authname, callback) {
            callback(
                    $.get("/blueprints", function (authname) {
                        $(".result").html(authname);
                        console.log(authname);
                        console($(".result").html(authname));
                    })
                    );
                  console.log("entro");
                          
        }
//        getBlueprintsByNameAndAuthor: function (authname, bpname, callback) {
//
//            callback(
//                    mockdata[authname].find(function (e) {
//                return e.name === bpname
//            })
//                    );
//        }
    }

})();