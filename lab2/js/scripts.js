'use strict';
var score = 0;
var answers = [];
var correctAnswers = [];

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
      onYesMessage: 'no it is purple dont give up',
      onNoMessage: 'great it is purple',
    },
    {
      body: 'is my fav animale dog?',
      ri: 'no',
      onYesMessage: 'No! its cat',
      onNoMessage: 'I prefer cats',
    },
    {
      body: 'is my fav food  pizza?',
      ri: 'no',
      onYesMessage: 'Who like pizza!?',
      onNoMessage: 'I perfer pasta',
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
      alert(questions[i].onYesMessage);
      score++;
    } else {
      alert(questions[i].onNoMessage);


    }
  }

}


function catsMeter() {
  var answer = prompt(' how much i love cat from 10??');

  if (answer === 8) {

    alert('it is right ');
    score = score + 1;
  } else {
    for (var index = 0; index < 4 && answer != 8; index++) {
      if (answer >= 6) {
        alert('too high');
      } else if (answer < 6) {
        alert('too low');
      }

      var answer = prompt(' how much i love cat from 10??');
      console.log(answer);
    }
    if (answer === 8) {
      console.log('it is right ');
      score++;
    }
    alert(' the 8 its the right answer ');
  }
}
function favAnimals() {
  var userAnswer = prompt('do you know my favourits animals?');
  userAnswer = userAnswer.toLowerCase();

  var correctAnswers = ['cat', 'tigger'];
  if (userAnswer === correctAnswers[0] || userAnswer === correctAnswers[1]) {

    alert('it is right');
    alert('they are ' + correctAnswers[0] + correctAnswers[1]);
    score = score + 1;
  } else {
    for (
      var i = 0;
      i < 5 &&
      userAnswer !== correctAnswers[0] &&
      userAnswer !== correctAnswers[1];
      i++
    ) {
      // eslint-disable-next-line no-redeclare
      var userAnswer = prompt('do you know my favourits animals?');
    }
    // eslint-disable-next-line eqeqeq
    while (userAnswer == correctAnswers[0] || userAnswer == correctAnswers[1]) {

      alert('it is right ');
      score = score + 1;
      break;
    }
    alert(`they are ${correctAnswers[0]} and ${correctAnswers[1]}`);
  }
}

askForName();
trueFalseAboutBayan();
catsMeter();
favAnimals();
alert(`your score is ${score}`);
alert('are you ready know funny secret about me?? scrol  down');
