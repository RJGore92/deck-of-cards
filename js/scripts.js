// var deck = [];
var preShuffledDeck = [];
// var postShuffledDeck = [];
var dealingDeck = [];
var dealtDeck = [];
var dealtCardsCounter = 0;

function shuffleDeck(deckA){
  var deckB = [];
  for (var i = 52; i > 0; i--) {
    var targetSlot = getRandomInt(i);
    var targetCard = deckA[targetSlot];
    deckB.push(deckA[targetSlot]);

    deckA.splice(targetSlot, 1);
  }
  return deckB;
}

function dealCard(dealDeck){
  dealtCardsCounter += 1;
  var cardToDeal = dealingDeck[0];
  dealtDeck.push(cardToDeal);
  var cardDealtSplit = cardToDeal.split(" ");
  var findSuit = cardDealtSplit[2];
  $("ul#dealt-cards").append("<li class='" + findSuit + "'>" + cardToDeal + "</li>");
  dealingDeck.splice(0, 1);
  if (dealtCardsCounter == 52) {
    $("div#can-deal-button").hide();
    $("div#reshuffle-button").show();
  }
}


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

$(document).ready(function() {
  var suits = ["clubs", "diamonds", "spades", "hearts"]
  var cards = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"]
  suits.forEach(function(suit) {
    $("div#output-row").append(
      `<div class='col-md-3'><h5 class='${suit}'>${suit}</h5><ul id='${suit}'></ul></div>`
    );
    cards.forEach(function(card){
       $(`ul#${suit}`).append(
         `<li class='${suit}'>${card} of ${suit}</li>`
       );
       preShuffledDeck.push(`${card} of ${suit}`);
    });
  });
  // preShuffledDeck = deck;
  for (var i = 52; i > 0; i--) {
    var targetSlot = getRandomInt(i);
    var targetCard = preShuffledDeck[targetSlot];
    var splitCard = targetCard.split(" ");
    console.log(splitCard);
    splitSuit = splitCard[2];
    console.log(splitSuit);
    if (i > 39) {
      $("ul#deck-output-a").append(
        "<li class='"+ splitSuit + "'>" + preShuffledDeck[targetSlot] + "</li>"
      );
    }
    else if (i > 26) {
      $("ul#deck-output-b").append(
        "<li class='"+ splitSuit + "'>" + preShuffledDeck[targetSlot] + "</li>"
      );
    }
    else if (i > 13) {
      $("ul#deck-output-c").append(
        "<li class='"+ splitSuit + "'>" + preShuffledDeck[targetSlot] + "</li>"
      );
    }
    else {
      $("ul#deck-output-d").append(
        "<li class='"+ splitSuit + "'>" + preShuffledDeck[targetSlot] + "</li>"
      );
    }
    dealingDeck.push(preShuffledDeck[targetSlot]);

    preShuffledDeck.splice(targetSlot, 1);

  }
  // dealingDeck = postShuffledDeck;
  $("button#dealing-button").click(function(){
    dealCard(dealingDeck);
  });

  $("button#reshuffle").click(function(){
    dealtCardsCounter = 0;
    $("ul#dealt-cards").empty();
    dealingDeck = shuffleDeck(dealtDeck);
    $("div#can-deal-button").show();
    $("div#reshuffle-button").hide();
  });

});
