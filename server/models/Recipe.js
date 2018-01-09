var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecipeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    rating: {type: Number, default: 0, required: true},
    chef: {type: String},
    _ingredients: [{type: Schema.Types.Object, ref: 'Ingredient'}]
 }, {timestamps: true, usePushEach: true });

mongoose.model('Recipe', RecipeSchema);