$(document).ready(function() {
var numberOfCrystals = 4;
var numberOptions = [10, 5, 3, 7];
var imgSrc = ["https://images-na.ssl-images-amazon.com/images/I/7125NT4a7PL._SX425_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/81eDsKD8ApL._SX425_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/81Y9Xcx8D8L._SY355_.jpg",
                "https://cdn.shopify.com/s/files/1/0007/9049/5293/products/Rainbow_Flame_Aura_Titanium_Quartz_Crystal_Cluster_Drusy_Gem_Stone_2_300x300.jpg?v=1537001881"]
    
var crystalGame = {
    magicNumber: 0,
    counter: 0,
    wins: 0,
    losses: 0,
    Init: function() {
        this.magicNumber = Math.floor(Math.random() * 102) + 19;
        this.counter = 0;
        for (var i = 0; i < numberOfCrystals; i++) {
            var numberOptions2 = numberOptions.map(x => Math.floor(Math.random() * 12) + 1);
            var divCrystal = $("<img>");
            divCrystal.addClass("col m-1 p-2 bsorder crystal");
            divCrystal.attr("src", imgSrc[i]);
            divCrystal.attr("data-crystalvalue", numberOptions2[i]);
            $(".crystalrow").append(divCrystal);
        return this.magicNumber;
        }
    },
    Reset: function() {
        crystalGame.magicNumber = Math.floor(Math.random() * 102) + 19;
        crystalGame.counter = 0;
        $(".crystalrow").empty();
        for (var i = 0; i < numberOfCrystals; i++) {
            var numberOptions2 = numberOptions.map(x => Math.floor(Math.random() * 12) + 1);
            var divCrystal = $("<img>");
            divCrystal.addClass("col m-1 p-2 border crystal");
            divCrystal.attr("src", imgSrc[i]);
            divCrystal.attr("data-crystalvalue", numberOptions2[i]);
            $(".crystalrow").append(divCrystal);
            crystalGame.magicNumber = Math.floor(Math.random() * 102) + 19;
            console.log("reset")
        }
    },
    Win: function() {
            crystalGame.wins++;
            alert("You won you champion!");
            crystalGame.Reset();
            console.log("win")
            return crystalGame.wins;
    },  
    Loss: function() {
            crystalGame.losses++;
            alert("You lost loser!");
            console.log("loss");
            return crystalGame.losses;
            
    },
    Update: function() {
        $("#total-count").text(crystalGame.counter);
    }
}

//  crystalGame.Init();dds
for (var i = 0; i < numberOfCrystals; i++) {
    var numberOptions2 = numberOptions.map(x => Math.floor(Math.random() * 12) + 1);
    var divCrystal = $("<img>");
    divCrystal.addClass("col m-1 p-2 border crystal");
    divCrystal.attr("src", imgSrc[i]);
    divCrystal.attr("data-crystalvalue", numberOptions2[i]);
    $(".crystalrow").append(divCrystal);
    crystalGame.magicNumber = Math.floor(Math.random() * 102) + 19;
}

$("#number-to-guess").text(crystalGame.magicNumber);
$("#total-count").text(crystalGame.counter);
$("#wins-count").text(crystalGame.wins);
$("#losses-count").text(crystalGame.losses);  

$(".crystal").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    crystalGame.counter += crystalValue;
    console.log(crystalValue);
    console.log(crystalGame.counter);
    console.log(crystalGame.magicNumber);
    crystalGame.Update();
    $("#number-to-guess").text(crystalGame.magicNumber);
    $("#total-count").text(crystalGame.counter);
    $("#wins-count").text(crystalGame.wins);
    $("#losses-count").text(crystalGame.losses);  
    if (crystalGame.counter === crystalGame.magicNumber) {
        crystalGame.wins++;
        $("#wins-count").text(crystalGame.wins);
        crystalGame.Win();
        crystalGame.Reset();
    }
    else if (crystalGame.counter > crystalGame.magicNumber) {
        crystalGame.losses++;
        $("#losses-count").text(crystalGame.losses);
        crystalGame.Loss();
        crystalGame.Reset();
    }
});

});