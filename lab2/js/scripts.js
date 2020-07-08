'use strict'
var score=0;
var arr1=[];
var arr2=[];


var ans1 = prompt('what is your name?');
console.log(ans1);
alert('welcome  ' + ans1 + '  lets to play  with each other ');

var ans2 = prompt('is my fav drink coffee?');
var ri="yes";
console.log(ans2);
arr1.push(ans2);
arr2.push(ri);

switch (ans2.toLocaleLowerCase()) {
case 'yes':
  alert('wow you can guess it');
  score++;
  break;
case 'no':
  alert('you cant guess it is coffee  ');
  break;
}


var ans3 = prompt('is my fav color red?');
console.log(ans3);
var ri2="no"
arr1.push(ans3);
arr2.push(ri2);
switch (ans3.toLocaleLowerCase()) {
case 'yes':
  alert('no it is purple dont give up');
  break;
case 'no':
  alert('great it is purple   ');
  score++;
  break;

  
}


var ans4 = prompt('is my fav animale dog?');
console.log(ans4);
var ri3="no"
arr1.push(ans4);
arr2.push(ri3);
switch (ans4.toLocaleLowerCase()) {
case 'yes':
  alert('no it is cat we still have fun');
  break;
case 'no':
  alert(' it is unbeliveble it is sure cat ');
  score++;
  break;

}



var ans5 = prompt('is my fav food  pizza?');
console.log(ans5);
var ri4="no"
arr1.push(ans5);
arr2.push(ri4);
switch (ans5.toLocaleLowerCase()) {
case 'yes':
  alert('no it is spaghetti you  will know somthing else');
  break;
case 'no':
  alert(' it is unbeliveble it is sure cat ');
  score++;
  break;

}

var ans6 = prompt('is my fav sport  tennis?');
console.log(ans6);
 var ri5="yes"
arr1.push(ans6);
arr2.push(ri5);
switch (ans5.toLocaleLowerCase()) {
case 'yes':
  alert('yes really i am amazing from you');
  score++;
  break;
case 'no':
  alert(' i love the tennis I ');
  break;
}

alert('i am so happy to know somthing about me' + '  nice to visit my web ' + ans1);
alert('are you ready know funny secret about me??');
console.log(arr1 );
console.log(arr2 );


var g1=prompt( " how much i love cat from 10??");
console.log( g1);
if (g1===8) {
  alert("it is right ");
 score=score+1
} else  { for (var  index = 0;(index < 4)&& g1!=8; index++) {
 if ( (g1>=6 )) { 
   alert("to high");
    
 } else if(g1<6) { alert("too low" );
   
 }
 
 var g1=prompt( " how much i love cat from 10??");
 console.log( g1);

}
while (g1===8) {
  score=score+1
 }
alert( " the 8 its the right answer "  );
}





var q2=prompt( "do you know my favourits animals?");
console.log( q2);
var ar2 =["cat", "tigger"];
if (q2===ar2[0].toLocaleLowerCase()||q2===ar2[1].toLocaleLowerCase()) {
 alert("it is right") ;
 alert("they are "+ar2[0]+ar2[1]);
 score=score+1
} else {for (var  i = 0; (i <6 && q2!==ar2[0]&& q2!==ar2[1]) ; i++) {
var q2=prompt( "do you know my favourits animals?");
}
while (q2==ar2[0].toLocaleLowerCase() || q2 ==ar2[1].toLocaleLowerCase()) {
  alert( "it is right ");
  score=score+1
  break;
}
alert("they are "+ar2[0]+ar2[1]);

}
alert("the score is"+ score);

























