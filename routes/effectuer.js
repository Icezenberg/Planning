var express = require('express');
var router = express.Router();


var effectuer = require("../controllers/utilisateursController");

/* GET home page. */
router.get('/', personne.list );

//cree une personne
// router.get("/creer", personne.create);
//
// //sauvegarder une personne
// router.post("/save", personne.save);
// //
// // //sauvegarder un legume. /!\ cest un POST
// // router.post("/save", personne.save);
//
// router.get("/delete/:id", personne.delete);
//
//
// //editer une personne
// router.post("/edit", personne.edit);



module.exports = router;