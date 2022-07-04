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

router.post('/recipe', (request, response) => {
    const incomingAccount = request.body;
  
    accounts.push(incomingAccount);
  
    response.json(accounts);


  })

module.exports = router;
