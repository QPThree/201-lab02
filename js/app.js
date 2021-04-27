'user strict'
//global vars
var username;
var answersBank = ['yes', 'no', 'y', 'n'];
//gets username at document load
//user must submit a valid username.  No empty strings or canceling
function greeting(){
    username = prompt('Hello! Please enter a username');
    while(username == null || username == ''){
        username = prompt('Please enter a valid username!');
    }
    return 'Hello ' + username + '!';
}

//5 yes / no questions
//
function quizGame(){
    var answer1 = prompt('Say an answer');
    if (answersBank.includes(answer1.toLowerCase())){
        alert('It worked!');
    }

}