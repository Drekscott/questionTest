---
---

//global variables
var counter = 0;
var questions = [];
var question_header = document.getElementById("questions-holder");
var input = document.getElementById("answer");
var score = 0;

window.onload = function handleQuestions(){
  questions = {{ site.data.questions | jsonify}};
  question_header.innerHTML = this.questions[counter].question;
  //variables questions to hold question data;
}

//function changes header question
function changeHeader(){
  var answer;

  answer = input.value;
  checkAnswer(answer);
  counter++;
  if (counter < 3){
    question_header.innerHTML = this.questions[counter].question;
  }
}

//function checks answer
function checkAnswer(value){
  if(counter == 0){
    if (value == 4){
      score += 1;
    }
  }
  if(counter == 1){
    if(value == 16){
      score+=1;
    }
  }
  if(counter == 2){
    if(value == 10){
      score+=1;
      question_header.innerHTML = "Questions Complete";
      document.getElementById('score').innerHTML = score;

    }else {
      question_header.innerHTML = "Questions Complete";
      document.getElementById('score').innerHTML = score;
    }
  }
input.value = "";
}

//used to reset variables
function replay(){
  counter = 0;
  score = 0;
  question_header.innerHTML = this.questions[counter].question;
  document.getElementById('score').innerHTML = score;
}
