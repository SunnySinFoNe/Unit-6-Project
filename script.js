$(".start-button").click(function() {
    $(".title").hide();
    $(".start-button").hide();
    $(".theQuestion").show();
});

$(".cartography").dblclick(function() {
    $(".cartography").hide();
    $(".smart-cookie").show();
});

$(".smart-cookie").dblclick(function() {
     $(".smart-cookie").hide();
    $(".cartography").show();
});

$(".yourChoice").click(function() {
    $(".theQuestion").hide();
    $(".onwards").show();
});

$(".noChoice").click(function() {
    $(".theQuestion").hide();
    $(".whatEver").show();
});

$(".neXt").click(function() {
    $(".onwards").hide();
    $(".whatEver").hide();
    $(".intoTheForest").show();
});

$(".chooseLife").click(function() {
    $(".intoTheForest").hide();
    $(".strangeShop").show();
});

$(".chooseDeath").click(function() {
    $(".intoTheForest").hide();
    $(".deathWhoops").show();
});

$(".whatsInStor").click(function() {
    $(".strangeShop").hide();
    $(".yayCandy").show();
});

$(".natureSucks").click(function() {
    $(".strangeShop").hide();
    $(".stupidTree").show();
});

$(".nom-nom").click(function() {
    $(".yayCandy").hide();
    $(".whatTheF").show();
});

$(".noBad").click(function() {
    $(".yayCandy").hide();
    $(".strangerNoDanger").show();
});

$(".waitNo").click(function() {
    $("strangerNoDanger").hide();
    $("waitWhat").show();
});

$(".rubies-turn").click(function() {
    $(".strangerNoDanger").hide();
    $(".trueEnding").show();
});

$("h5").hover(function(){
    $("h5").text("Created by Sunny SinFoNe");
});

$("h5").dblclick(function(){
    $("h5").text("Created by Katie S. Nieves");
});

$(".bonusContentMaybe").click(function() {
    $(".trueEnding").hide();
    $(".giftsForThee").show();
});

