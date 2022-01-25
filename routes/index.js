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


router.post('/findandUpdate/:id', function(req, res, next) {
  UserModel.findOneAndUpdate({_id : req.params.id},{posts : req.body.post})
  .then(data =>{
    res.send(data)
  })
})


router.get('/find/:num/', function(req, res, next) {
  // console.log(req);
  // try {
    
  // } catch (error) {
    UserModel.find().limit(req.params.num)
    .then(data => res.json(data))
    
  // }

})


router.get('/find/:date/:year', function(req, res, next) {

  console.log(req.params.Startdate);
  // let dateFormat = req.params.Startdate.split("-");
  UserModel.find()
  .then(data =>{
    data.map(d =>{
      let date = data.includes(`${req.params.date} ${req.params.year}`);
      console.log(date);
    })
  })
})

module.exports = router;

