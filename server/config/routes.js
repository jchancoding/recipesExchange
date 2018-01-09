let path = require('path');
let recipes = require('../controllers/recipes.js');


module.exports = function(app){

    app.post('/newrecipe', recipes.newrecipe);
   // app.post("/newingredient", function(req,res){
      //  recipes.newing(req,res);
   // })

    app.get('/all', function(req, res){
        recipes.displayall(req, res);
    })


    app.get('/alling', function(req,res){
        recipes.getingsofrec(req,res);
    })



    app.post('/update/:id', function(req,res){
        recipes.edit(req,res);
    })


   app.get("/recipes/:id", function(req, res){
       recipes.displayone(req,res);
   })

   app.put("/like/:id", function(req,res){
       console.log("INROUTELIKE");
       recipes.like(req,res);
   })

    app.all("*", (req, res) => { 
        res.sendFile(path.resolve("../client/dist/index.html")) 
    });
}

