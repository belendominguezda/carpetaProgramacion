const heroes = require('../db/science');
let db = require ('../db/science');

let heroesController = {
    index: function (req,res){
        //return res.send ('Lista de todos los heroes')

        return res.render('index', {heroes: db.lista})
    },
    show: function (req,res){
        let id = req.params.id
        let datos = []

        for (let i=0; i<db.lista.length; i++){
            if (db.lista[i].id == id){
                datos.push(db.lista[i])
            }
        }  
        return res.render ('show', {
            showNombre : datos
        })
    },
    details: function (req,res){
        let id = req.params.id
        let ok = req.params.ok
        let nombreHeroe = ''
        let reseniaHeroe = ''

        for (let i=0; i<db.lista.length; i++){
            if (db.lista[i].id == id && ok == 'ok'){
                nombreHeroe = db.lista[i].nombre
                reseniaHeroe = db.lista[i].resenia
            } else if (db.lista[i].id == id && ok == undefined){
                nombreHeroe = db.lista[i].nombre
                reseniaHeroe = 'Lamento que no desees saber más de mi :('
            }
        }
        return res.render ('detalle', {
            nombre : nombreHeroe,
            resenia : reseniaHeroe
        })
    },
};

module.exports = heroesController;