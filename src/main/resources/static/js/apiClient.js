/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//módulo provisto (apimock.js)
apiClient= (function () {



    return {
        getBlueprintsByAuthor: function (authname, callback) {
            callback(
                   // $.get("/blueprints", function (authname) {
                       // $(".result").html(authname);
                        //alert("Load was performed.");
                   // })
                  //  );
                  console.log("entro")
                          );
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