"use strict";
var score = 0;
var answers = [];
var correctAnswers = [];

function askForName() {
  var name = prompt("what is your name?");
  console.log(name);
  alert("welcome  " + name + "  lets to play  with each other ");
}
function trueFalseAboutBayan() {
  var favDrink = prompt("is my fav drink coffee?");
  var ri = "yes";
  console.log(favDrink);
  answers.push(favDrink);
  correctAnswers.push(ri);

  switch (favDrink.toLocaleLowerCase()) {
    case "yes":
      alert("wow you can guess it");
      score++;
      break;
    case "no":
      alert("you cant guess it is coffee  ");
      break;
  }

  var favColor = prompt("is my fav color red?");
  console.log(favColor);
  var ri2 = "no";
  answers.push(favColor);
  correctAnswers.push(ri2);
  switch (favColor.toLocaleLowerCase()) {
    case "yes":
      alert("no it is purple dont give up");
      break;
    case "no":
      alert("great it is purple   ");
      score++;
      break;
  }

  var likeDog = prompt("is my fav animale dog?");
  console.log(likeDog);
  var ri3 = "no";
  answers.push(likeDog);
  correctAnswers.push(ri3);
  switch (likeDog.toLocaleLowerCase()) {
    case "yes":
      alert("no it is cat we still have fun");
      break;
    case "no":
      alert(" it is unbeliveble it is sure cat ");
      score++;
      break;
  }

  var likePizza = prompt("is my fav food  pizza?");
  console.log(likePizza);
  var ri4 = "no";
  answers.push(likePizza);
  correctAnswers.push(ri4);
  switch (likePizza.toLocaleLowerCase()) {
    case "yes":
      alert("no it is spaghetti you  will know somthing else");
      break;
    case "no":
      alert(" it is unbeliveble it is sure cat ");
      score++;
      break;
  }

  var likeTennis = prompt("is my fav sport  tennis?");
  console.log(likeTennis);
  var ri5 = "yes";
  answers.push(likeTennis);
  correctAnswers.push(ri5);
  switch (likeTennis.toLocaleLowerCase()) {
    case "yes":
      alert("yes really i am amazing from you");
      score++;
      break;
    case "no":
      alert(" i love the tennis I ");
      break;
  }

  alert(
    "i am so happy to know somthing about me" + "  nice to visit my web " + name
  );
}

console.log(answers);
console.log(correctAnswers);
function catsMeter() {
  var answer = prompt(" how much i love cat from 10??");
  console.log(answer);
  if (answer === 8) {
    alert("it is right ");
    score = score + 1;
  } else {
    for (var index = 0; index < 4 && answer != 8; index++) {
      if (answer >= 6) {
        alert("too high");
      } else if (answer < 6) {
        alert("too low");
      }

      var answer = prompt(" how much i love cat from 10??");
      console.log(answer);
    }
    if (answer === 8) {
      score++;
    }
    alert(" the 8 its the right answer ");
  }
}
function favAnimals() {
  var userAnswer = prompt("do you know my favourits animals?");
  userAnswer = userAnswer.toLowerCase();
  console.log(userAnswer);
  var correctAnswers = ["cat", "tigger"];
  if (userAnswer === correctAnswers[0] || userAnswer === correctAnswers[1]) {
    alert("it is right");
    alert("they are " + correctAnswers[0] + correctAnswers[1]);
    score = score + 1;
  } else {
    for (
      var i = 0;
      i < 5 &&
      userAnswer !== correctAnswers[0] &&
      userAnswer !== correctAnswers[1];
      i++
    ) {
      var userAnswer = prompt("do you know my favourits animals?");
    }
    while (userAnswer == correctAnswers[0] || userAnswer == correctAnswers[1]) {
      alert("it is right ");
      score = score + 1;
      break;
    }
    alert("they are " + correctAnswers[0] + correctAnswers[1]);
  }
}

askForName();
trueFalseAboutBayan();
catsMeter();
favAnimals();
alert("the score is" + score);
alert("are you ready know funny secret about me??");
