var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/recipe:food', function(req, res, next) {
  res.send('respond with a resource4');
});

module.exports = router;
