$(document).ready(function(){

  let scores, roundScore, activePlayer, gamePlaying;
  
  
  start();
  
  
  
  // $('#current-' + activePlayer).text(dice);
  // document.querySelector('#current-' + activePlayer).textContent = dice;
  
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
    $('#name-' + activePlayer).text('Winner!');
    $('.dice').css('display', 'none')
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
  
  
  
  function start(){
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
  
  $('#score-0').text('0');
  $('#score-1').text('0');
  $('#current-0').text('0');
  $('#current-1').text('0');
  $('#name-0').text('Player 1');
  $('#name-1').text('Player 2');
  $('.dice').css('display', 'block');
  }
  
  
  });