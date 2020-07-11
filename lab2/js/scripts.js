'use strict';
var score = 0;
var answers = [];
var rights= [];

function askForName() {
  var name = prompt('what is your name?');

  alert('welcome  ' + name + '  lets to play  with each other ');
}
function trueFalseAboutBayan() {
  var questions = [
    {
      body: 'is my fav drink coffee?',
      ri: 'yes',
      onYesMessage: 'wow you can guess it',
      onNoMessage: 'you cant guess it is coffee',
    },
    {
      body: 'is my fav color red?',
      ri: 'no',
      onYesMessage:'great it is purple',
      onNoMessage: 'no it is purple dont give up',
    },
    {
      body: 'is my fav animale dog?',
      ri: 'no',
      onYesMessage: 'I prefer cats',
      onNoMessage: 'No! its cat',
    },
    {
      body: 'is my fav food  pizza?',
      ri: 'no',
      onYesMessage: 'I perfer pasta',
      onNoMessage: 'Who like pizza!?',
    },
    {
      body: 'is my fav sport  tennis?',
      ri: 'yes',
      onYesMessage: 'Yess I really love it',
      onNoMessage: 'No I dont know other sport',
    },
  ];

  for (let i = 0; i < questions.length; i++) {
    var answer = prompt(questions[i].body, 'yes or no ');
    if (answer === questions[i].ri) {
      answers.push(answer);
      rights.push(questions[i].ri);
      alert(questions[i].onYesMessage);
      score++;
    } else {
      alert(questions[i].onNoMessage);


    }
  }

}


function catsMeter() {
  var answer = prompt(' how much i love cat from 10??');
  answers.push(answer);
  rights.push(8);
  if (answer == 8) {
    alert('it is right ');
    score = score + 1;
  } else {
    for (var index = 0; index < 3 && answer !== 8; index++) {
      if (answer >= 6) {
        alert('too high');
      } else if (answer < 6) {
        alert('too low');
      }
      answer = prompt(' how much i love cat from 10??');
    }
    if (answer == 8) {
      alert('it is right ');
      score++;
    }
    alert(' the 8 its the right answer ');
  }
}
function favAnimals() {
  var userAnswer = prompt('do you know my favourits animals?');
  userAnswer = userAnswer.toLowerCase();
  var correctAnswers = ['cat', 'tigger'];
  answers.push(userAnswer);
  rights.push( correctAnswers );
  if (userAnswer === correctAnswers[0] || userAnswer === correctAnswers[1]) {

    alert('it is right');
    alert('they are ' + correctAnswers[0] + correctAnswers[1]);
    score = score + 1;
  } else {
    for (
      var i = 0;
      i < 5 &&
      userAnswer !== correctAnswers[0] &&
      userAnswer !== correctAnswers[1]
      ;i++
    ) {

      userAnswer = prompt('do you know my favourits animals?');

      while (userAnswer === correctAnswers[0] || userAnswer === correctAnswers[1]) {

        alert('it is right ');
        score = score + 1;
        break;
      }
    }

    alert(`they are  ${correctAnswers[0]}  and   ${correctAnswers[1]}`);
  }
}

askForName();
trueFalseAboutBayan();
catsMeter();
favAnimals();
alert(`your score is ${score}`);
alert('are you ready know funny secret about me?? scrol  down');
