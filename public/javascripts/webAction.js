var vote = 0;
var fridge_count = 0;
var recipe_count = 0;
var itemAmounts = [];
function onSetInFridge() {
    vote++;
    fridge_count = parseInt($("#itemCount").val())
    for(var i=0;i<fridge_count;i++){
        var n = i.toString();
        var item="<input type='text' id="+"'fridge_item"+n+"'"+"class='item' name='item'  placeholder='item'>";
        var amount = "<input type='number' id='fridge_amount"+n+"' class='amount' name='amount' placeholder='amount'>"
        var unit = "Unit: <select id='fridge_unit"+n+"'> " +
            "<option value='of'>of</option>" +
            "<option value='grams'>grams</option>" +
            "<option value='ml'>ml</option>" +
            "<option value='slices'>slices</option>" +
            "</select>"
        var useBy = "Use-By: <input type='date' id='date"+n+"' class = 'date' name='date' placeholder='used by'>";
        var where = "<input type='text' id='where"+n+"' class = 'where' name ='where' placeholder='Where?'>";
        var row = "<div class='row'>"+item+amount+unit+useBy+where+"</div>";
        $("#fridge").after(row);
    }
    $("#setCount").hide();
    if(vote >= 2){
        setButton()
    }
}

function onSetforRecipe(){
    vote ++;
    recipe_count = parseInt($("#recipesCount").val())
    for(var i=0;i<recipe_count;i++){
        var n = i.toString();
        var name = "<input type='text' id='name"+n+"' class='name' placeholder='Name'>";
        var itemCount = "<input type='number' id = '"+n+"itemCount' placeholder='How many items?'>";
        var countConfirm =  "<input id = '"+n+"itemCountConfirm' type='submit' onclick='onSetRecipeItems("+n+")' value='Confirm'>";
        var setAmount = "<dic class = '"+n+"setAmount'>"+itemCount+countConfirm+"</dic>";
        var recipeBox =  "<div class='recipeBox' id='recipe_Item"+n+"'>" + name + setAmount+ "</div>";
        $("#recipes").after(recipeBox);
    }
    $("#setRecipesCount").hide();
    if(vote >= 2){
        setButton();
        vote = 0;
    }
}
function onSetRecipeItems(n){
    $("."+n+"setAmount").hide();
    var itemCount = parseInt($("#"+n+"itemCount").val());
    itemAmounts.push(itemCount);
    for(var x = 0;x<itemCount; x++) {
        var itemindex = n.toString()+x.toString();
        var item = "<input type='text' id=" + "'recipe_item" + itemindex  + "'" + "class='item' name='item'  placeholder='item'>";
        var amount = "<input type='number' id='recipe_amount" + itemindex  + "' class='amount' name='amount' placeholder='amount'>";
        var unit = "Unit: <select id='recipe_unit" + itemindex  + "'> " +
            "<option value='of'>of</option>" +
            "<option value='grams'>grams</option>" +
            "<option value='ml'>ml</option>" +
            "<option value='slices'>slices</option>" +
            "</select>";
        var row = "<div class='the_Item'>" + item + amount + unit + "</div>";
        $("#name"+n.toString()).after(row);
    }
}

function setButton(){
    var confirmButton = "<input id ='submitButton' type='submit' onclick='archiveData()' value='Submit'>";
    $(".recipe").after(confirmButton);
}

function archiveData() {
    var recipes = [];
    var fridgeItem = [];
    for(var i=0; i< fridge_count ;i++){
        var index = i.toString();
        var itemId = "fridge_item"+index;
        var amountId = "fridge_amount"+index;
        var unitId = "fridge_unit"+index;
        var usedbyId = "date"+index;
        var whereId = "where"+index;
        var row = $("#"+itemId).val()+","
            +$("#"+amountId).val()+","
            +$("#"+unitId).val()+","
            +$("#"+usedbyId).val()+","
            +$("#"+whereId).val();
        fridgeItem.unshift(row)
    }

    if ((itemAmounts.length>0)&&(recipe_count==itemAmounts.length)){
        for (var a = 0; a<itemAmounts.length;a++) {
            var id = a.toString();
            var numberofItem = itemAmounts[a];
            var nameId = "name"+id;
            var itemList = [];
            for(var b=0;b<parseInt(numberofItem);b++) {
                var itemIndex = id + b.toString();
                var itemId = "recipe_item" + itemIndex;
                var amountId = "recipe_amount" + itemIndex;
                var unitId = "recipe_unit" + itemIndex;
                theItem = {item:$("#"+itemId).val(),
                    amount:$("#"+amountId).val(),
                    unit:$("#"+unitId).val()};
                itemList.push(theItem);
            }
            recipe={
                name:$("#"+nameId).val(),
                ingredients:itemList
            };
            recipes.push(recipe);
        }
    }
    var recipesList = JSON.stringify(recipes);
    getTheResponse(fridgeItem,recipesList);
}

function getTheResponse(fridgeItem,recipesList) {
    var result = "";
    $.post("/upload_data",
        {
            recipe:recipesList,
            fridgeItems:JSON.stringify(fridgeItem)
        },
        function (data, status) {
            if(status=="success") {
                // alert("DATA: " + data + "\nSTATUS: " + status);
                result = JSON.parse(data);
                showTheResult(result);
            }else{
                showTheResult("Sorry, There are something wrong!");
            }
        });
}

function showTheResult(result) {
    if(result==""){
        result="Order Takeout!"
    }
    $(".fridge").hide();
    $(".recipe").hide();
    var resultbox = "<biv class='result'><h2>We recommed you coo0" +
        "k:</h2></br></br>" +
        "<h3>"+result+"</h3>" +
        "<button id='refresh' onclick='location.reload()'> Retry</button>" +
        "</div>";
    $(".fridge").before(resultbox);
    $("#submitButton").hide();
}