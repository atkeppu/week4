var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:food', function(req, res, next) {
 // res.send(req.params.food);

 res.json({ name: req.params.food,
            instructions : 'instructions',
            ingredients:'ingredients' });


     // Rendering home.ejs page
 /*   res.render('home2', {
    foods: [
        {
            name: req.params.food,
            instructions : 'instructions',
            ingredients:'ingredient'
        }
    ]
    });*/
});

router.get('/', (req, res) => {

    res.render('home2', {
        foods: [
            {
                name: req.params.name,
                instructions : req.params.instructions,
                ingredients: req.params.ingredients
            }
        ]
        });

    /*
    const incomingAccount = request.body;
  
    accounts.push(incomingAccount);
  
    response.json(accounts);
*/

  })

  router.post('/recipe/', (req, res) => {
  

    });

module.exports = router;
