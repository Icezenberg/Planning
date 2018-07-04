//export du module
var mongoose = require('mongoose');
var taches = require('../models/taches');

/*controller pour les taches */
var tachesController = {};

tachesController.list = function(req,res){
    taches.find({}).exec(function (err, taches) {
        if (err){
            console.log('Error : ', err);
        }else{
            res.render("../views/taches/taches", {taches:taches} );
        }
    });
};

tachesController.affecter = function(id){
    console.log(id);
    var myId = mongoose.Types.ObjectId(id);
    taches.findByIdAndUpdate(myId, {
        $set: {
            affecte: true,
        }
    }, {new: true}, function (err) {
            if (err){
                console.log("error");
            }
        }
    )
};


//redirection à la page de creation de taches
tachesController.creer = function(req, res){
    res.render("../views/taches/addTache");
};


//enregistrement des taches 
tachesController.save = function(req, res){
    var tache = new taches(req.body);

    tache.save(function(err){
        if(err){
            console.log(err);
            res.render("../views/taches/addTache");
        } else{
            console.log("creation tache OK");
            res.redirect("/taches");
        } 
    });
};

//edition une tâche  par son id
tachesController.edit = function(req, res) {
    console.log(req.body.task_id);
    taches.findByIdAndUpdate(req.body.task_id, {
        $set: {
            nom: req.body.update_task,
            commentaire: req.body.update_com
        }
    }, function (err, taches) {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/taches");
        }
    });
};

//fonction supprimer
tachesController.delete = function(req, res){
    var id= req.params.id;
    taches.findByIdAndDelete(id, function (err) {
        if(err){
            console.log("error de suppression")
        }else {
            res.redirect("/taches");
        }
    })
};

module.exports = tachesController;