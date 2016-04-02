var express = require('express'),
    mongoose = require('mongoose');
var router = express.Router();

mongoose.connect('mongodb://localhost/todo_development');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

function validatePresenceOf(value) {
    console.log("It's validating");
    return value && value.length;
}

var Task = new Schema({
    task : { type: String, validate: [validatePresenceOf, 'an inventory is required'] }
});

var Task = mongoose.model('Task', Task);


/* GET home page. */
router.get('/home', function(req, res){
   Task.find({}, function (err, docs) {
     res.render('views/inventories', {
       docs: docs
     }); 
   });
});

/* GET new task creation page. */
router.get('/inventory/new', function(req, res){
     res.render('views/new', {
       title: 'Add new Inventory'
     });
});

/* Submit new task entry. */
router.post('/inventory', function(req, res){
    console.log('Request body is: '+req.body);
    var task = new Task(req.body);
    task.save(function (err) {
        if (!err) {
            res.redirect('/home');
        }
        else {
            //req.flash('warning', err);
            res.redirect('/inventory/new');
        }
    }); 
});

/* GET edit task page. */
router.get('/inventory/:id/edit', function(req, res){
     Task.findById(req.params.id, function (err, doc){
         res.render('views/edit', {
           title: 'Update inventory',
           task: doc
         }); 
     });
});

/* Submit task edit change. */
router.post('/inventory/:id', function(req, res){
   Task.findById(req.params.id, function (err, doc){
     doc.task = req.body.task;
     doc.save(function(err) {
        if (!err){
             res.redirect('/home');
        } 
        else {
            //error handling
        }
     }); 
   });
});

/* Delete task. */
router.get('/inventory/:id/delete', function(req, res){
   Task.findById(req.params.id, function (err, doc){       
     if (!doc) return next(new NotFound('Document not found')); 
     doc.remove(function() {
       res.redirect('/home');
     });
   }); 
});

/* About us page. */
router.get('/aboutUs', function(req, res){
     res.render('views/aboutUs', {
        title: 'About ABC dot COM!!'
     });
});

/* Redirect to home page. */
router.get('/', function(req, res) {
    res.redirect('/home');
});

module.exports = router;
