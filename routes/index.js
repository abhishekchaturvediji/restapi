var express = require('express');
var router = express.Router();

var UserModel = require("./users");

/* GET home page. */
router.post('/', function(req, res, next) {
  UserModel.create({
    name:req.body.name,
    posts:req.body.post,
  })
  .then(created =>{
    res.send('created');
  })
  .catch(err => console.log(err))
});


router.get('/find/:num/', function(req, res, next) {
  // console.log(req);
  // try {
    
  // } catch (error) {
    
  // }
  UserModel.find().limit(req.params.num)
  .then(data