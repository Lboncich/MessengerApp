var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
  
        res.render('index');
    });


router.post('/', function(req, res, next) {
    var email = req.body.email;
    var user = new User({
        firstName: 'Max',
        lastName: 'Schwarz',
        password: 'super-secret',
        email: email
    });
    user.save();
    res.redirect('/');
});

module.exports = router;
