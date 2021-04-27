'user strict'
//global vars
var username;
var answersPoss = ['yes', 'y', 'no', 'n'];
var questionBank = [
    'Did Quen Grow up in Maine?',
    'Did Quen go to the University of New Hampshire?', 
    'Is Quen planning to take the Javascript 401?', 
    'Did Quen mention Snowboarding?', 
    'Was Quen\'s major Kinesiology?'];
var answerBank = [
    'n',
    'y',
    'n',
    'n',
    'y'
]

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
    correct = 0;
    for (var i = 0; i < 5; i++){
        var answer = prompt(questionBank[i]);
        if(validateAnswer(answer)) {
            console.log('This returned true');
            if (answer.startsWith(answerBank[i])) {
                correct = correct + 1;
                console.log('You answer bank is working as planned');
                //alert will go here to say they were correct
            }
        }
        else{
            console.log('This returned false');
            //alert will go here to say they were wrong
        }
    }
}

//Checks answer against possibilities y,yes,n,no

function validateAnswer(answer){
    if(answersPoss.includes(answer.toLowerCase())){
        return true;
    }
    else{
        return false;
    }
}