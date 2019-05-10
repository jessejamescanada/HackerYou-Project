$(document).ready(function(){

let scores, roundScore, activePlayer, gamePlaying;
let totalScore = [0,0];
let gamesWon = [0,0];


start();

$('.btn-roll').on('click', function(){
  if(gamePlaying){
  let dice = Math.floor(Math.random() * 6) + 1;
  $('.dice').attr('src', 'img/dice-' + dice + '.png');

  // update roundscore if rolled # not 1
  if(dice !== 1){
    roundScore = roundScore + dice;
    $('#current-' + activePlayer).text(roundScore);
  }else{
    // next player
    nextPlayer();
  }
}
})

$('.btn-hold').on('click', function(){
  if(gamePlaying){
  // add current score to global score
  scores[activePlayer] = scores[activePlayer] + roundScore;
  // update UI  
  $('#score-' + activePlayer).text(scores[activePlayer]);
  

  // check if player won
  if(scores[activePlayer] >= 20){
    gamesWon[activePlayer] = gamesWon[activePlayer] + 1
    console.log("player", activePlayer, "wins", gamesWon);
    $('#win-' + activePlayer).text(gamesWon[activePlayer])
    $('#name-' + activePlayer).text('Winner!');
    $('#name-' + activePlayer).css('color', 'blue');
    $('.wrapper').css('background-color', '#f2e559');
    $('.dice').css('display', 'none')
    totalScore[activePlayer] = gamesWon[activePlayer];
    console.log(totalScore);
    checkWinner();
  gamePlaying = false;
  }else{
  nextPlayer();
  }
}
});

function nextPlayer(){
  if(gamePlaying){
  if(activePlayer === 0){
    activePlayer = 1;
    roundScore = 0;
    $('#current-0').text(roundScore);
  }else{
    activePlayer = 0;
    roundScore = 0;
    $('#current-1').text(roundScore);
  }
}
}




$('.btn-newgame').on('click', start);


function checkWinner(){
  if(totalScore[activePlayer] >= 5){
    gamePlaying = false;
    $('.wrapper').css('background', 'pink');
    $('dice').css('display', 'none');
    $('#name-' + activePlayer).text('You Win!')
  }
};

function start(){



if(totalScore[activePlayer] >= 5){
  // gamePlaying = false;
  // $('.wrapper').css('background', 'pink');
  // $('dice').css('display', 'none');
  // $('#player-' + activePlayer).text('WINNER');
  checkWinner();
}
else{

  scores = [0,0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

$('.wrapper').css('background-color', 'rgb(143, 164, 255)');
$('#name-0').css('font-size', '50px');
$('#name-1').css('font-size', '50px');
$('#name-0').css('color', 'rgb(255, 184, 52)');
$('#name-1').css('color', 'rgb(255, 184, 52)');
$('#score-0').text('0');
$('#score-1').text('0');
$('#current-0').text('0');
$('#current-1').text('0');
$('#name-0').text('Player 1');
$('#name-1').text('Player 2');
$('.dice').css('display', 'block');
}


}
});