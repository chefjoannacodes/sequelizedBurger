# sequelizedBurger

## Live Link (If relevant)
 - www.example.com

## Description on how to use the app

## Requirements
#### 

- Remove all references to your vanilla MySQL queries and replace them with Sequelize queries.
- That means:
Replacing your MySQL Burger model with a Sequelized equivalent.
- Don't forget to edit the model and initial migration file to make the burger's devoured field carry a default value of false -- otherwise you might encounter bugs.
- There's no option to include that default in the command line, so you'll need to open up Sublime to make this change.
- Don't forget to sync the models!
- Edit your new config.json file to include your database configurations. Place your JawsDB details in the production property of your json file; the details of your local database go in the developer property.
- Remove your old ORM file, as well as any references to it in burgers_controller.js. Replace those references with Sequelize's ORM methods.

## Technologies Used
#### Use bullets to list out the technologies used. For example,
- Sequelize
- Node
- Javascript

## Code Explaination
- There was not a big difference from mySQL, but some syntax was different. The difference I found was mostly in the controllers, to make the route calls. Here is the code below, found in the burgers-controller.js file. 

-------------


```
var router = express.Router();

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
```