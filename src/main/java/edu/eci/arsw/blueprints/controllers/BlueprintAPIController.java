/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.blueprints.controllers;

import edu.eci.arsw.blueprints.model.Blueprint;
import edu.eci.arsw.blueprints.model.Point;
import edu.eci.arsw.blueprints.persistence.BlueprintNotFoundException;
import edu.eci.arsw.blueprints.services.BlueprintsServices;
import java.util.LinkedHashSet;
import java.util.Set;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author hcadavid
 */
@RestController
@RequestMapping(value = "/blueprints") // este se habla con servicios 
public class BlueprintAPIController {

    @Autowired
    BlueprintsServices bp;
    

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> manejadorGetAllBlueprints() {
        try {
            //obtener datos que se enviarán a través del API
            return new ResponseEntity<>(bp.getAllBlueprints(), HttpStatus.ACCEPTED);
        } catch (Exception ex) {
            Logger.getLogger(BlueprintAPIController.class.getName()).log(Level.SEVERE, null, ex);
            return new ResponseEntity<>("Error bla bla bla", HttpStatus.NOT_FOUND);
        }
    }

 @RequestMapping(value="/{author}",method = RequestMethod.GET)
  
    public ResponseEntity<?> manejadorGetBlueprintsByAuthor(@PathVariable("author") String author) {
        try {
            //obtener datos que se enviarán a través del API
            return new ResponseEntity<>(bp.getBlueprintsByAuthor(author), HttpStatus.ACCEPTED);
        } catch (Exception ex) {
            Logger.getLogger(BlueprintAPIController.class.getName()).log(Level.SEVERE, null, ex);
            return new ResponseEntity<>("Error bla bla bla", HttpStatus.NOT_FOUND);
        }
    }

   @RequestMapping(method = RequestMethod.GET,value="/{author}/{bpname}")
  
    public ResponseEntity<?> manejadorGetBlueprint(@PathVariable("author") String author, @PathVariable("bpname") String bpname) {
        try {
            //obtener datos que se enviarán a través del API
            return new ResponseEntity<>(bp.getBlueprint(author, bpname), HttpStatus.ACCEPTED);
        } catch (Exception ex) {
            Logger.getLogger(BlueprintAPIController.class.getName()).log(Level.SEVERE, null, ex);
            return new ResponseEntity<>("Error bla bla bla", HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> manejadorPostRecursoXX(@RequestBody Blueprint blueprint) {
        try {
            bp.addNewBlueprint(blueprint);
            return new ResponseEntity<>(HttpStatus.CREATED);
        } catch (Exception ex) {
            Logger.getLogger(BlueprintAPIController.class.getName()).log(Level.SEVERE, null, ex);
            return new ResponseEntity<>("Error bla bla bla", HttpStatus.FORBIDDEN);
        }

    }
    
    @RequestMapping(path = "/{blueprint}", method = RequestMethod.PUT)
    public ResponseEntity<?> PuttRecursoSet(@PathVariable Blueprint blue) {
        try {
            Blueprint bl=bp.getBlueprint(blue.getAuthor(),blue.getName());
            Set<Blueprint> blueprints = bp.getAllBlueprints();
           
            
           
                for (Blueprint b : blueprints) {
                if (b.equals(bl)) {
                    b=bl;
                }

          }
                System.out.print("entro a put");
            return new ResponseEntity<>(HttpStatus.CREATED);
        } catch (Exception ex) {
            Logger.getLogger(BlueprintAPIController.class.getName()).log(Level.SEVERE, null, ex);
            return new ResponseEntity<>("Error bla bla bla", HttpStatus.FORBIDDEN);
        }

    }

}
