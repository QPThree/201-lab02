'use strict';

//---global variables declared ---
let globalCorrect = 0;
let answerBank = ['y',
  'yes',
  'n',
  'no',
  23,
  ['36', '38', '39', '49', '51', '53', '55']];
let userName;

//---functions declared----

//verify username
function verifyName(name){
  while (name === null || name === ''){
    name = prompt('Please enter a valid userName');
  }
  userName = name;
}
//Main quiz (5 questions)
function mainQuiz(){
  let answer = prompt('Is Quen from Maine?');
  answer = answer.toLowerCase();

  //question1
  if (answer === answerBank[2] || answer === answerBank[3]){
    globalCorrect = globalCorrect + 1;
    alert('You got it correct, ' + userName + '!');
  }
  else if (answer === answerBank[0] || answer === answerBank[1]){
    alert('Ouch! Better luck on the next one.');
  }
  else{
    //console.log('Non accepted answer submitted');
    alert('Wow, really?');
  }
  //question 2
  answer = prompt('Did Quen go to the University of New Hampshire?').toLowerCase();
  if (answer === answerBank[0] || answer === answerBank[1]){
    globalCorrect = globalCorrect + 1;
    alert('You got it correct, ' + userName + '!');
  }
  else if (answer === answerBank[2] || answer === answerBank[3]){
    alert('Ouch! Better luck on the next one.');
  }
  else{
    //console.log('Non accepted answer submitted');
    alert('Wow, really?');
  }
  //question 3
  answer = prompt('Is Quen planning to take Javascript 401?').toLowerCase();
  if (answer === answerBank[2] || answer === answerBank[3]){
    globalCorrect = globalCorrect + 1;
    alert('You got it correct, ' + userName + '!');
  }
  else if (answer === answerBank[0] || answer === answerBank[1]){
    alert('Ouch! Better luck on the next one.');
  }else{
    //console.log('Non accepted answer submitted');
    alert('Wow, really?');
  }
  //question 4
  answer = prompt('Did Quen mention snowboarding?').toLowerCase();
  if (answer === answerBank[2] || answer === answerBank[3]){
    //correct = correct + 1;
    globalCorrect = globalCorrect + 1;
    alert('You got it correct, ' + userName + '!');
  }
  else if (answer === answerBank[0] || answer === answerBank[1]){
    alert('Ouch! Better luck on the next one.');
  }else{
    //console.log('Non accepted answer submitted');
    alert('Wow, really?');
  }
  answer = prompt('Was Quen\'s major kinesiology?').toLowerCase();
  if (answer === answerBank[0] || answer === answerBank[1]){
    globalCorrect = globalCorrect + 1;
    alert('You got it correct, ' + userName + '!');
  }
  else if (answer === answerBank[2] || answer === answerBank[3]){
    alert('Ouch! Better luck on the next one.');
  }
  else{
    //console.log('Non accepted answer submitted');
    alert('Wow, really?');
  }
  //console.log(userName + ', your score:', correct);
  alert(`${userName}, your score so far: ${globalCorrect}`);
}
//question 6
//for loop track number of guesses
//had to convert answer to int via parseint for the strictly equals 23 requirement
function q6(){
  let correctAge = false;
  let i = 1;
  alert('Next, you have 4 chances to guess what age I finished college!');
  while (i < 5 && !correctAge){
    let answer = prompt(`Guess ${i}:`);
    if (parseInt(answer) === answerBank[4]){
      alert('Nicely Done!');
      correctAge = true;
      globalCorrect = globalCorrect + 1;
    }
    else if(parseInt(answer) < answerBank[4]){
      i++;
      alert(`Too low! You have ${5 - i} guesses remaining`);
    }
    else if(parseInt(answer)){
      i++;
      alert(`Too high! You have ${5 - i} guesses remaining`);
    }
    else{
      i = i+1;
    }
  }
  if (i === 5){
    alert('Too bad, the correct answer was 23!');
  }
}
//question 7
//array to store possible answers
//for loops: 1. To count chances 2. To loop through the array, comparing the users guess with list of accepted answer
function q7(){
  alert('Tom Brady Has won 7 Super Bowls.  Super Bowls are numbered from 1-55 (and counting).  Guess which Super Bowls Tom has won by entering integers between 1 and 55.  You have 6 guesses to get ONE correct. Good luck!');
  for (let k = 0; k < 6; k++){
    let answer = prompt(`Guess ${k + 1}`);
    for (let j = 0; j < 7; j++){
      if (answer === answerBank[5][j]){
        alert('Correct! Nicely done.');
        globalCorrect = globalCorrect + 1;
        k = 10; //sets k to 10 to break the loop.  Couldnt get 'break;' to work
      }
    }
  }
  alert(`Correct answers were: ${answerBank[5]}`);
  alert(`Your total correct out of 7 questions is: ${globalCorrect}`);
}
//---script runs in this order---
alert('You are about to take a Quiz about me, Quen.  All questions are yes or no answers.  Please answer as such (yes / y or  no / n!)');
userName = prompt('Hello Please enter your name!');
verifyName(userName);
mainQuiz();
q6();
q7();
