var deck = [];
var preShuffledDeck = [];
var postShuffledDeck = [];




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
       deck.push(`${card} of ${suit}`);
    });
  });
  preShuffledDeck = deck;
  for (var i = 52; i > 0; i--) {
    var targetSlot = getRandomInt(i);
    var targetCard = preShuffledDeck[targetSlot];
    var splitCard = targetCard.split(" ");
    console.log(splitCard);
    splitSuit = splitCard[2];
    console.log(splitSuit);
    $(`ul#deck-output`).append(
      "<li class='"+ splitSuit + "'>" + preShuffledDeck[targetSlot] + "</li>"
    );
    postShuffledDeck.push(preShuffledDeck[targetSlot]);

    preShuffledDeck.splice(targetSlot, 1);

  }
});
