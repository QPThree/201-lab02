'use strict';
//global vars
let username;
let correct;
//questions and related answers in banks must coordinate via index
let questionBank = [
  'Did Quen Grow up in Maine?',
  'Did Quen go to the University of New Hampshire?',
  'Is Quen planning to take the Javascript 401?',
  'Did Quen mention Snowboarding?',
  'Was Quen\'s major Kinesiology?'];
let answerBank = [
  'n',
  'y',
  'n',
  'n',
  'y'
];

//gets username at document load
//user must submit a valid username.  No empty strings or canceling
function greeting(){
  username = prompt('Hello! Please enter a username');
  while(username === null || username === ''){
    username = prompt('Please enter a valid username!');
  }
  return 'Hello ' + username + '!';
}

//5 yes or no questions
//questions and answers come from  bank arrays
//answers are validated with while loop
//end of function will call displayResults function
//TODO: Change console.logs to alerts for user to see
function quizGame(){
  correct = 0;
  let answer;
  for (let i = 0; i < 5; i++){
    answer = prompt(questionBank[i]).toLowerCase();
    while (answer !== 'y' && answer !== 'yes' && answer !== 'no' && answer !== 'n'){
      answer = prompt('Please enter a valid respone');
    }
    if (answer.startsWith(answerBank[i])) {
      correct = correct + 1;
      console.log('Got question right');
      alert('That\'s Correct!');
    }
    else{
      console.log('Got question Wrong');
      alert('Unfortunately, no.');
    }
  }
  if (correct > 4){
    console.log('Smoked it!');
  }
  else if(correct > 2 && correct <= 4){
    console.log('Decent job ' + username + ' You answered ' + correct + ' correctly');
  }
  else{
    console.log('Yikes! Were you even paying attention?');
  }
  displayResults(correct);
}

//function gets element from html and writes the users score into it with HTML
function displayResults(correctlyAnswered){
  let e = document.getElementById("displayResults");
  e.innerHTML = "<div class = \"main-item\" id=\"container-7\"><h1>" + correctlyAnswered + "</h1><br><h2>" + username + "\'s Last Score</h2></div>";

}

