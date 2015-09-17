var rollDice = function() {
  return Math.round(Math.random() * 5 + 1)
}

var playerOneScore = 0
var playerTwoScore = 0
var turnScore = 0

var rollPigDice = function() {
  var diceRoll = rollDice()
  if (diceRoll === 1) {
    turnScore = 0
    counter += 1
  }
  else {
    turnScore += diceRoll
  }
  return [turnScore, diceRoll]
}


var addPlayerOneScore = function() {
  playerOneScore += turnScore
  turnScore = 0
}


var addPlayerTwoScore = function() {
  playerTwoScore +=turnScore
  turnScore = 0
}

var counter = 0

$(document).ready(function() {
  $("button#roll-dice").click(function() {
    var newScore = rollPigDice()
    var imgSrc = "img/" + newScore[1] + ".gif"
    $("#roll-score").hide().fadeIn().attr("src", imgSrc)
    $("#turn-score").text(newScore[0])
    if (counter % 2 !== 0 && newScore[0] === 0) {
      $("h2#whose-turn").text("Player 2 is on a roll!")
    } else if (counter % 2 === 0 && newScore[0] === 0){
      $("h2#whose-turn").text("Player 1 is on a roll!")
    }
  })

  $("h2#whose-turn").text("Player 1 is on a roll!")
  $("button#end-turn").click(function() {
    counter += 1
    if (counter % 2 !== 0) {
      addPlayerOneScore()
      $("h2#whose-turn").text("Player 2 is on a roll!")
      $("#player1-total-score").text(playerOneScore)
    } else {
      addPlayerTwoScore()
      $("h2#whose-turn").text("Player 1 is on a roll!")
      $("#player2-total-score").text(playerTwoScore)
    }
  })


})
