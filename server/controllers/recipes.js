var mongoose = require('mongoose');
var Recipe = mongoose.model('Recipe');
var Ingredient = mongoose.model('Ingredient');


module.exports = {
    newrecipe: function(req, res) {
        Recipe.findOne({username: req.body.name}, function(err, recipe){
            if(err) {
            console.log(err);
            }
            if(recipe) {
            console.log(recipe)
            message = "recipe exists";
            console.log(message)
            } 
            else {
                var new_recipe = new Recipe();
                new_recipe.name = req.body.name;
                new_recipe.chef = req.body.chef;
                        new_recipe.save(function(err,newRecipe){
                            if(err) {
                                console.log(err);
                            } else {
                                console.log('successifully saved: ',newRecipe)
                                res.json(newRecipe);
                            }
                        })
                    }
            })
        },

    getingsofrec: function(req,res){
        var all_ing_list = [];
        for(i = 0; i < ing_array.length; i++){
            Ingredient.findById({_id: ing_array[i]}, function(err, found_ing){
                if(err) {
                    console.log(err);
                    console.log('couldn\'t find recipe');
                }
                else{
                    all_ing_list.push(found_ing);
                    console.log(all_ing_list);
                    
                }
        })
    }
},
        //res.json(all_ing_list);
        
  

    edit: function(req,res){
        console.log('within the express edit function');
        Recipe.findOne({_id: req.params.id}, function(err, recipe){
            if(err) {
              console.log(err);
              console.log('couldn\'t find recipe');
            }
            if(recipe) {
                message = "recipe exists";
                console.log(message)
                var new_ingredient = new Ingredient();
                console.log(req.body);
                for(var i = 0; i < req.body.length; i++){
                    new_ingredient.name = req.body[i].name;
                    new_ingredient.amount = req.body[i].amount;
                }
                new_ingredient._recipe = recipe._id;
                console.log(new_ingredient.name, new_ingredient.amount, new_ingredient._recipe);
                new_ingredient.save(function(err, ingredient){
                    if(err){
                        console.log("error saving ing");
                        console.log(err);
                    }
                    else{
                        recipe._ingredients.push(ingredient);
                        console.log('successfully pushed ingred');
                        recipe.save(function (err, result) {
                            if (err) {
                                console.log(err);
                                console.log('error saving recipe');
                            } else {
                                res.json(result);
                                console.log('sending back saved recipe with new ingredients');
                            }
                        })
                    }
                })

               
                
            }
        })
    },
        
   
 

    displayall: function(req,res){
        Recipe.find({}, function(err, data){
            if(err){
                console.log(err);
            }
            else{
                res.json(data);
            }
        })
    },

    displayone: function(req,res){
        Recipe.findOne({_id: req.params.id}, function(err,data){
            if(err){
                console.log(err);
            }
            else{
                console.log(data);
                res.json(data);
            }
        })
    },

    like: function(req,res){
        console.log("INLIKE");
        Recipe.findOneAndUpdate({_id: req.params.id}, {$inc: {rating: 1}}, function(err, result){
            if(err){
                console.log(err);
            }
            res.json(result);
        })
    }
            
    
    
    
    




}