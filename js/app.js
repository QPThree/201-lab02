'use strict';
let globalCorrect = 0;
let answerBank = ['y',
  'yes',
  'n',
  'no'];
let userName = prompt('Hello Please enter your name!');
alert('You are about to take a Quiz about me, Quen.  All questions are yes or no answers.  Please answer as such (yes / y or  no / n!');

//verify username
while (userName === null || userName === ''){
  userName = prompt('Please enter a valid userName');
}

//begin initial 5 questions quiz
function q1 (){
  let answer = prompt('Is Quen from Maine?');
  answer = answer.toLowerCase();
  
  //question1
  if (answer === answerBank[2] || answer === answerBank[3]){
    console.log('correct');
    globalCorrect = globalCorrect + 1;
    alert('You got it correct, ' + userName + '!');
  }
  else if (answer === answerBank[0] || answer === answerBank[1]){
    console.log('Wrong');
    alert('Ouch! Better luck on the next one.');
  }
  else{
    //console.log('Non accepted answer submitted');
    alert('Wow, really?');
  }
}
q1();


//question2
fuction q2(){
  let answer = prompt('Did Quen go to the University of New Hampshire?');
  answer = answer.toLowerCase();
  if (answer === answerBank[0] || answer === answerBank[1]){
    console.log('correct');
    globalCorrect = globalCorrect + 1;
    alert('You got it correct, ' + userName + '!');
  }
  else if (answer === answerBank[2] || answer === answerBank[3]){
    console.log('Wrong');
    alert('Ouch! Better luck on the next one.');
  }
  else{
    //console.log('Non accepted answer submitted');
    alert('Wow, really?');
  }
}
q2();


//question3
function q3(){
  let answer = prompt('Is Quen planning to take Javascript 401?');
  answer = answer.toLowerCase();
  if (answer === answerBank[2] || answer === answerBank[3]){
    console.log('correct');
    globalCorrect = globalCorrect + 1;
    alert('You got it correct, ' + userName + '!');
  }
  else if (answer === answerBank[0] || answer === answerBank[1]){
    console.log('Wrong');
    alert('Ouch! Better luck on the next one.');
  }else{
    //console.log('Non accepted answer submitted');
    alert('Wow, really?');
  }
}
q3();

//question4
function q4(){
  let answer = prompt('Did Quen mention snowboarding?');
  answer = answer.toLowerCase();
  if (answer === answerBank[2] || answer === answerBank[3]){
    console.log('correct');
    //correct = correct + 1;
    globalCorrect = globalCorrect + 1;
    alert('You got it correct, ' + userName + '!');
  }
  else if (answer === answerBank[0] || answer === answerBank[1]){
    console.log('Wrong');
    alert('Ouch! Better luck on the next one.');
  }else{
    //console.log('Non accepted answer submitted');
    alert('Wow, really?');
  }
}
q4();


//question5
answer = prompt('Was Quen\'s major kinesiology?');
answer = answer.toLowerCase();
if (answer === answerBank[0] || answer === answerBank[1]){
  console.log('correct');
  globalCorrect = globalCorrect + 1;
  alert('You got it correct, ' + userName + '!');
}
else if (answer === answerBank[2] || answer === answerBank[3]){
  console.log('Wrong');
  alert('Ouch! Better luck on the next one.');
}
else{
  //console.log('Non accepted answer submitted');
  alert('Wow, really?');
}
//console.log(userName + ', your score:', correct);
alert(`${userName}, your score so far: ${globalCorrect}`);


//question 6
//for loop track number of guesses
//had to convert answer to int via parseint for the strictly equals 23 requirement
let wrong = 0;
let correctAge = 0;
let i = 1;
alert('Next, you have 4 chances to guess what age I finished college!');
while (wrong !== 4 && correctAge === 0){
  answer = prompt(`Guess ${i}:`);
  if (parseInt(answer) === 23){
    console.log('Correct');
    alert('Nicely Done!');
    correctAge = 1;
    globalCorrect = globalCorrect + 1;
  }
  else if(parseInt(answer) < 23){
    wrong = wrong + 1;
    console.log('Wrong');
    alert(`Too low! You have ${4 - wrong} guesses remaining`);
  }
  else if(parseInt(answer)){
    wrong = wrong + 1;
    console.log('Wrong');
    alert(`Too high! You have ${4 - wrong} guesses remaining`);
  }
  i = i+1;
}
if (wrong === 4){
  console.log('4 wrong the correct answer was 23!');
  alert('Too bad, the correct answer was 23!');
}

//question 7
//array to store possible answers
//for loops: 1. To count chances 2. To loop through the array, comparing the users guess with list of accepted answer
let answerPossibilities = ['36', '38', '39', '49', '51', '53', '55'];
alert('Tom Brady Has won 7 Super Bowls.  Super Bowls are numbered from 1-55 (and counting).  Guess which Super Bowls Tom has won by entering integers between 1 and 55.  You have 6 guesses to get ONE correct. Go luck!');
for (let k = 0; k < 6; k++){
  answer = prompt(`Guess ${k + 1}`);
  for (let j = 0; j < answerPossibilities.length; j++){
    if (answer === answerPossibilities[j]){
      console.log('Correct Super Bowl Guessed');
      alert('Correct! Nicely done.');
      globalCorrect = globalCorrect + 1;
      console.log(globalCorrect);
      k = 10; //sets k to 10 to break the loop.  Couldnt get 'break;' to work
    }
  }
}
alert(`Correct answers were: ${answerPossibilities}`);
alert(`Your total correct out of 7 questions is: ${globalCorrect}`);






//reach code is below
//may use in future iterations

// //global vars
// let username;
// let correct;
// //questions and related answers in banks must coordinate via index
// let questionBank = [
//   'Did Quen Grow up in Maine?',
//   'Did Quen go to the University of New Hampshire?',
//   'Is Quen planning to take the Javascript 401?',
//   'Did Quen mention Snowboarding?',
//   'Was Quen\'s major Kinesiology?'];
// let answerBank = [
//   'n',
//   'y',
//   'n',
//   'n',
//   'y'
// ];

// //gets username at document load
// //user must submit a valid username.  No empty strings or canceling
// function greeting(){
//   username = prompt('Hello! Please enter a username');
//   while(username === null || username === ''){
//     username = prompt('Please enter a valid username!');
//   }
//   return 'Hello ' + username + '!';
// }

// //5 yes or no questions
// //questions and answers come from  bank arrays
// //answers are validated with while loop
// //end of function will call displayResults function
// //TODO: Change console.logs to alerts for user to see
// function quizGame(){
//   correct = 0;
//   let answer;
//   for (let i = 0; i < 5; i++){
//     answer = prompt(questionBank[i]).toLowerCase();
//     while (answer !== 'y' && answer !== 'yes' && answer !== 'no' && answer !== 'n'){
//       answer = prompt('Please enter a valid respone');
//     }
//     if (answer.startsWith(answerBank[i])) {
//       correct = correct + 1;
//       console.log('Got question right');
//       alert('That\'s Correct!');
//     }
//     else{
//       console.log('Got question Wrong');
//       alert('Unfortunately, no.');
//     }
//   }
//   if (correct > 4){
//     console.log('Smoked it!');
//   }
//   else if(correct > 2 && correct <= 4){
//     console.log('Decent job ' + username + ' You answered ' + correct + ' correctly');
//   }
//   else{
//     console.log('Yikes! Were you even paying attention?');
//   }
//   displayResults(correct);
// }

// //function gets element from html and writes the users score into it with HTML
// function displayResults(correctlyAnswered){
//   let e = document.getElementById("displayResults");
//   e.innerHTML = "<div class = \"main-item\" id=\"container-7\"><h1>" + correctlyAnswered + "</h1><br><h2>" + username + "\'s Last Score</h2></div>";

// }

