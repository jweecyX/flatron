var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

    res.render('index.html', { title: 'Home' });
});


/* GET home page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('users');
    collection.find({}, {}, function(e, docs){
        res.render('userlist', {
            "userlist": docs,
            "title": "Exclusive Members"
        });
    })
});

router.get('/register', function(req, res) {
    res.render('register', {title: 'Register'})

});

router.get('/music', function(req, res) {
    res.render('music', {title: 'Music'})

});


router.post('/register', function(req, res){
    var db = req.db;
    var fn = req.body.firstname;
    var ln = req.body.lastname;
    var al = req.body.alias;
    var em = req.body.email;
    
    var col = db.get('users');
    
    col.insert( {
        "firstname": fn,
        "lastname": ln,
        "alias": al,
        "email": em
        
    }, function( err, doc) {
        if(err)
            res.send("There is a problem with adding information into the database.");
        else {
            res.location('userlist');
            res.redirect('userlist');
        }
    });

  res.render('index', { title: 'Home' });
});



router.get('/userlist', function(req, res) {
        
    var db = req.db;
    var collection = db.get('users');
    collection.find({}, {}, function(e, doc){
        res.render('userlist', {
            "userlist" : doc,
            title: 'User List'
                       
        });
    });
});






router.post('/adduser', function(req, res) {
    var fn = req.body.firstname;
    var ln = req.body.lastname;
    var em = req.body.email;
    var al = req.body.alias;
    
    var db = req.db;
    var collection = db.get('users');
    
    collection.insert({ 
        "firstname": fn, 
        "lastname": ln, 
        "alias": al, 
        "email": em 
    }, function(e, doc){                     
        if(e){
            res.send("There is something wrong.");
        }
        else{
            res.location('/userlist');
            res.redirect('/userlist');
        }
    });    

});


module.exports = router;
