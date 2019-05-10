/* one player dice game
have a high score leaderboard
a timer counting down from a minute
when user clicks on dice it rolls it
it adds numbers up
user can 'hold' their score to make it permanent
if user rolls same number twice before holding, it resets their non permanent score
*/

$(document).ready(function(){

  let scores, roundScore, player, gamePlaying;
  let lostScore;
  let seconds = 60;

  init();

$('.btn-roll').on('click', function(){
  if(gamePlaying){
  let dice = Math.floor(Math.random() *6) + 1;
  
  console.log(dice);
  $('.dice').attr('src', 'img/dice-' + dice + '.png');
  
  if(dice===6 && lostScore ===6){
    scores[player] = 0;
    // roundScore = 0
    $('#score-1, score-2', player).text('0');
  }
  else if(dice!==1){
    roundScore += dice;
    
    $('#current-1, current-2', player).text(roundScore);
    console.log(player, roundScore);
  }
  // else if(dice === 1 && lostScore ===1){
  //   scores[player] = 0;
  //   roundScore = 0;
  //   $('#score', player).text(roundScore);
  // }
}else{
  nextPlayer();
}
  
});

$('.btn-hold').on('click', function(){
  if(gamePlaying){
  scores[player] += roundScore;
  $('#score-1', player).text(roundScore);
  if(scores[player] >= 100){
    $('#name-1', player).text('Winner!');
    $('.dice').css('display', 'none');
    gamePlaying=false;
  }else{
    nextPlayer();
  }
}
})

nextPlayer();

function nextPlayer(){
  player === 0 ? player = 1 : player = 0;
  roundScore = 0;
  $('current-1').text('0');
  $('current-2').text('0');
}



const countdown = window.setInterval(function(){
  $('.seconds').text(seconds);
  seconds = seconds - 1;

  if(seconds < 0){
    $('.wrapper').css('background', 'yellow');
    $('.seconds').text('Times up!');
    clearInterval(countdown);
  }
},1000);


$('.btn-newgame').on('click', init()
);

function init(){
  scores = [0,0];
  player = 0;
  roundScore = 0;
  gamePlaying = true;
  
  // $('.dice').css('display', 'none');
  $('score-1').text('0');
  $('score-2').text('0');
  $('current-1').text('0');
  $('current-2').text('0');
  $('name-1').text('player 1');
  $('name-2').text('player 2');
};


});