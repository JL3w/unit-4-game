$(document).ready(function() {
var wins = 0;
var losses = 0;
var magicNumber = 0;
var counter = 0;
var numberOfCrystals = 4;

function crystalValueCalc() {
    return Math.floor(Math.random() * 12) + 1;
}

function magicNumberCalc() {
    return Math.floor(Math.random() * 102) +19;
}

$("#number-to-guess").text(magicNumber);
$("#wins-count").text(wins);
$("#losses-count").text(losses);
$("#total-count").text(counter)

var numberOptions = [10, 5, 3, 7];
var imgSrc = ["https://images-na.ssl-images-amazon.com/images/I/7125NT4a7PL._SX425_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/81eDsKD8ApL._SX425_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/81Y9Xcx8D8L._SY355_.jpg",
            "https://cdn.shopify.com/s/files/1/0007/9049/5293/products/Rainbow_Flame_Aura_Titanium_Quartz_Crystal_Cluster_Drusy_Gem_Stone_2_300x300.jpg?v=1537001881"]

for (var i = 0; i < numberOfCrystals; i++) {
    var numberOptions2 = numberOptions.map(x => Math.floor(Math.random() * 12) + 1);
    var divCrystal = $("<img>");
    divCrystal.addClass("col m-1 p-2 border crystal");
    divCrystal.attr("src", imgSrc[i]);
    divCrystal.attr("data-crystalvalue", numberOptions2[i]);
    $(".crystalrow").append(divCrystal);

}

$(".crystal").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    console.log(crystalValue);
    console.log(counter);

});

});