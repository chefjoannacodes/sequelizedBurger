var express = require("express");
var path = require("path");
var db = require("../models");

var router = express.Router();

// Import the model (burger.js) to use its database functions.


// module.exports = function(app){


//   app.get("/api/all", function(req,res){
//     Burger.findById({}).then(function(results){
//       res.json(results);
//     });
//   });
// }



// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.burger.findAll({}).then(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// router.get("/", function(req, res){
// 	res.render(path.join(__dirname, "../views/index.handlebars"));

// });

router.post("/create", function(req, res) {
  db.burger.create({
  	burger_name: req.body.burger_name
  }).then(function(data){
  	res.redirect("/");
  });
});



router.put("/:id", function(req, res) {
  // var condition = "id = " + req.params.id;

  // console.log("condition", condition);

  db.burger.update({
    devoured: req.body.devoured
  },{
  	where: {
  		id: req.params.id
  	}
  }).then(function(data) {
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
   db.burger.destroy({
  	where: {
  		id: req.params.id
  	}
  }).then(function(data) {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
