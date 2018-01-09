var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IngredientSchema = new mongoose.Schema({
    name: {type: String, required: true},
    amount: {type: String, required: true},
    _recipe: {type: Schema.Types.ObjectId, ref: 'Recipe'}
}, {timestamps: true, usePushEach: true });
mongoose.model('Ingredient', IngredientSchema);

