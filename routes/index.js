const express = require('express');
const router = express.Router();
var fridgesItem="";
var recipes="";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title:"express"});
});

router.post('/upload_data',function (req,res,next) {

    result = finder(req.body);
    console.log(result);
    res.send(JSON.stringify(result));

})

function finder(requestData){
  fridgesItem = requestData.fridgeItems;
  recipes = requestData.recipe;
  var recipeList = JSON.parse(recipes);
  var fridgeThings = JSON.parse(fridgesItem);
  var result = "";
  var cloestDate = "";
  if(recipeList.length>0){
    for(var n=0;n<recipeList.length;n++){
      var allow = false;
      allow = checkFridge(recipeList[n].ingredients,fridgeThings);
      if(allow[0]){
        if((result=="")&&(cloestDate=="")) {
            result=recipeList[n].name;
            cloestDate=allow[1];
        }else{
          if(cloestDate<allow[1]){
            result=recipeList[n].name;
            cloestDate=allow[1];
          }
        }
      }
    }
  }
  return result;
}

function checkFridge(recipeItemList,fridgeThings){
  let ITEM = 0;
  let AMOUNT = 1;
  let UNIT = 2;
  let USEBY = 3;
  var canMade = false;
  var continueCheck = true;
  var closetDate="";

  if((fridgeThings.length>0)&&(recipeItemList.length>0)){
    for(var i=0;i<recipeItemList.length;i++) {
        if (continueCheck) {
            var item = recipeItemList[i].item;
            var amount = recipeItemList[i].amount;
            var unit = recipeItemList[i].unit;
            for (var n = 0; n < fridgeThings.length; n++) {
                var thing = fridgeThings[n].split(",");
                var checkTimeResult = checkTime(thing[USEBY]);
                if (checkItem(item,thing[ITEM]) && (amount <= thing[AMOUNT])
                    && checkTimeResult[0] && thing[UNIT] == unit) {
                    canMade = true;
                    if(closetDate==""){
                      closetDate=checkTimeResult[1];
                    }else{
                      if(closetDate>checkTimeResult[1]){
                        closetDate=checkTimeResult[1];
                      }
                    }
                    break;
                } else {
                    continueCheck = false;
                }
            }
        }else{
            break;
        }
    }
  }
  return [canMade,closetDate];
}

function checkItem(recipeItem,fridgeItem) {
    if(recipeItem.length>fridgeItem.length){
      if(recipeItem.indexOf(fridgeItem)>=0){
        return true;
      }else {
        return false;
      }
    }else if(fridgeItem.length>recipeItem.length){
        if(fridgeItem.indexOf(recipeItem)>=0){
            return true;
        }else {
            return false;
        }
    }else if((recipeItem.length==fridgeItem.length) && (recipeItem==fridgeItem)){
      return true;
    }else {
      return false;
    }
}

function checkTime(usedby){
  var date = new Date();
  var udate = new Date(usedby);
  if(date.getTime()<=udate.getTime()){
    return [true,udate];
  }else {
    return [false,""];
  }
}

module.exports = router;
