// ===== SERVER.JS ======
// ======================
// This is the entry point of our server, it creates
// the all important express app, connects static paths,
// and requires our first modules.


let express = require('express');       
let bodyParser = require('body-parser'); 
let path = require('path');

let app = express();

// two static folders, one for static and one for angular dist
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.json());

// require mongoose before routes to load models
require('./config/mongoose.js');
require('./config/routes.js')(app);

app.listen(8001, function(){
    console.log('super awesome stuff on port 8001!')
})