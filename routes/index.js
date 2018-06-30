const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title:"express"});
  // console.log("ok")
});

router.get('/upload_data',function (req,res,next) {
    // res.send('hello')
    console.log("got request")
})


module.exports = router;
