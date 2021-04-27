'user strict'
//global vars
var username;

//gets username at document load
//user must submit a valid username.  No empty strings or canceling
function greeting(){
    username = prompt('Hello! Please enter a username');
    while(username == null || username == ''){
        username = prompt('Please enter a valid username!');
    }
    return 'Hello ' + username + '!';
}

function quizGame(){


}