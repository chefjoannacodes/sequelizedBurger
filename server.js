var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var db = require("./models");


var port = process.env.PORT || 8080;

var app = express();

app.use(express.static(__dirname));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

//Routes
// require("./routes/api-routes.js")(app);


// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

// app.post('/create', function(req,res){
// 	connection.query('INSERT INTO burgers (burger_name) VALUES (?);', [req.body.burger_name],function(err,result){
// 		if(err)throw err;
// 		res.redirect('/');
// 	})
// })

db.sequelize.sync({force:false}).then(function() {
	app.listen(port, function() {
		console.log("running" + port);
	});
});


