const questions = [

    //......................................question 1...................................................
    {
        Question : `Tickets numbered 1 to 20 are mixed upand then a ticket is drawn at random. Whatis the probability that the ticket drawn hasa number which is a multiple of 3 or 5?`,
         answers : [
            {text : "1/2", correct : false},
            {text : "2/5", correct : false},
            {text : "8/15", correct : false},
            {text : "9/20", correct : true}
            
         ]
    },
     //......................................question 2...................................................
    {
        Question : `A bag contains 2 red, 3 green and 2 blue balls. Two balls are drawn at random.What is the probability that none of the balls drawn is blue?`,
         answers : [
            {text : "10/21", correct : true},
            {text : "11/21", correct : false},
            {text : "2/7", correct : false},
            {text : "5/7", correct : false}
            
         ]
    },
     //......................................question 3...................................................
    {
        Question : `In a box, there are 8 red, 7 blue and 6 green balls. One ball is picked up randomly. What is the probability that it is neither rednor green?`,
         answers : [
            {text : "1/3", correct : true},
            {text : "3/4", correct : false},
            {text : "7/19", correct : false},
            {text : "8/21", correct : false}
            
         ]
    },
     //......................................question 4...................................................
    {
        Question : `What is the probability of gettinga sum 9 from two throws of a dice?`,
         answers : [
            {text : "1/6", correct : false},
            {text : "1/8", correct : false},
            {text : "1/9", correct : true},
            {text : "1/12", correct : false}
            
         ]
    },
     //......................................question 5...................................................
    {
        Question : `Three unbiased coins are tossed. Whatis the probability of getting at most two heads?`,
         answers : [
            {text : "3/4", correct : false},
            {text : "1/4", correct : false},
            {text : "3/8", correct : false},
            {text : "7/8", correct : true}
            
         ]
    },
     //......................................question 6...................................................
    {
        Question : `Two dice are thrown simultaneously. What isthe probability of getting two numbers whose productis even?`,
         answers : [
            {text : "1/2", correct : false},
            {text : "3/4", correct : true},
            {text : "3/8", correct : false},
            {text : "5/16", correct : false}
            
         ]
    },
     //......................................question 7..................................................
    {
        Question : `In a class, there are 15 boys and 10 girls. Three students are selected at random.The probability that 1 girl and 2 boys are selected, is:`,
         answers : [
            {text : "21/46", correct : true},
            {text : "25/117", correct : false},
            {text : "1/50", correct : false},
            {text : "3/25", correct : false}
            
         ]
    },
     //......................................question 8...................................................
    {
        Question : `In a lottery, there are 10 prizes and 25 blanks. A lottery is drawn at random. What is the probability of getting a prize?`,
         answers : [
            {text : "1/10", correct : false},
            {text : "2/5", correct : false},
            {text : "2/7", correct : true},
            {text : "5/7", correct : false}
            
         ]
    },
     //......................................question 9...................................................
    {
        Question : `From a pack of 52 cards, two cards are drawn together at random. What is the probability of both the cards being kings?`,
         answers : [
            {text : "1/5", correct : false},
            {text : "25/57", correct : false},
            {text : "35/256", correct : false},
            {text : "1/221", correct : true}
            
         ]
    },
     //......................................question 10...................................................
    {
        Question : `Two dice are tossed. The probability that the total score is a prime number is:`,
         answers : [
            {text : "1/6", correct : false},
            {text : "5/12", correct : true},
            {text : "1/2", correct : false},
            {text : "7/9", correct : false}
            
         ]
    }

]
    

const question_Element = document.getElementById("question");
const answer_button = document.getElementById("answer_buttons");
const next_button = document.getElementById("next_btn");
const skip_button = document.getElementById("skip_btn");
const track_ques = document.getElementById("Track_question");
const marks = document.getElementById("view_Marks");
const Question_no_element = document.getElementById("Question_no");
var incorr_count = 0;

marks.innerHTML = 0;

let startTime;
let timeInterval;
var go_home = document.getElementById("go_home");
 var attempt_count = 0;          
let current_question_index = 0;
let score = 0;
let time = 0;
let count_ques = 0;

function startQuiz() {
   current_question_index = 0;
   score = 0;
   next_button.innerHTML = "Next";
   skip_button.innerHTML = "Skip";
   startTime = new Date();

   showQuestion();
}

timeInterval = 0;
function setTimeInterval() {
   timeInterval = setInterval(() => {
      time++;                                                            // set Time.....................................
      document.getElementById("Timer").innerHTML = time;
   }, 1000);
}



function showQuestion() {
  skip_button.style.display="block"
   resetState()
   go_home.style.display = 'none';   
   document.getElementById("time_time_").style.display = 'block';    
   document.getElementById("score_score_s").style.display = 'block';       // set style..( Control display)......................................
   document.getElementById("trackQues").style.display = 'block';                  
   document.getElementById("text_text_qq").innerHTML = "Probability";

   let currentQuestion = questions[current_question_index];
   let questionNo = currentQuestion + 1;                                   // Question iterate...................
   question_Element.innerHTML = currentQuestion.Question;
   // console.log(currentQuestion.Question);
   count_ques++;

  setTimeInterval();                          // control Time.....................................

   // track_ques.innerHTML= count_ques + "/10";
   Question_no_element.innerHTML = count_ques;

   currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;                       // set  button ........................................
      button.classList.add("btn");
      answer_button.appendChild(button);
      if (answer.correct) {
         button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);

   })
}

function resetState() {
   next_button.style.display = "none";
   while (answer_button.firstChild) {
      answer_button.removeChild(answer_button.firstChild);
   }
   
}

function selectAnswer(e) {
   const selectedBtn = e.target;
   skip_button.style.display="none"
   document.getElementById("time_time_").style.display = 'block'; 
   document.getElementById("score_score_s").style.display = 'block';
   document.getElementById("text_text_qq").innerHTML = "Time And Work";         
   document.getElementById("trackQues").style.display = 'block';
   const iscorrect = selectedBtn.dataset.correct === "true";                   
   if (iscorrect) {
      selectedBtn.classList.add("correct");
      score++;
      marks.innerHTML = score;

                                                                  //check ..... Select option.........(right  or   worng)......
   } else {
      selectedBtn.classList.add("incorrect");
      incorr_count++;
      
   }


   clearInterval(timeInterval);
   time = 0;
    go_home.style.display = 'none';                
    attempt_count++;



   Array.from(answer_button.children).forEach(button => {
      if (button.dataset.correct === "true") {
         button.classList.add("correct");
      }
      button.disabled = true;
   })
   next_button.style.display = "block";

}
var nn;

function demo() {
   var inp = document.getElementById("inputName").value

   nn = inp;

}






function showScore() {
   clearInterval(timeInterval);
   resetState();
   const endTime = new Date();
   const timeTakenInSeconds = Math.floor((endTime - startTime) / 1000);


   skip_button.style.display = 'none';
   document.getElementById("time_time_").style.display = 'none'; //..............RESULT....... display part...................
   document.getElementById("score_score_s").style.display = 'none';
   document.getElementById("trackQues").style.display = 'none';
   question_Element.style.textAlign = 'center';
   document.getElementById("text_text_qq").innerHTML = "Quiz Result";
   question_Element.innerHTML = `You scored ${score} out of ${questions.length}!`;
   question_Element.innerHTML = ` <b> ${localStorage.getItem("name")} </b> , Your result is: <br><br><br>Total Time Taken:<b> ${timeTakenInSeconds} </b> seconds <br> Total Question : <b>10</b> <br>  ${attempt_count > 0 ? "Attempt :"+ "<b>"+attempt_count+ "</b>" : "<b>No of question attempted </b>" }  <br> Correct : <b>${score} </b> <br> Worng : <b>${incorr_count}</b> <br> Percentage <b> ${(score/10)*100}% </b>  `;
   
   next_button.innerHTML = "Play Again";
   go_home.style.display = 'block';
   go_home.addEventListener('click',()=> {
      window.open('http://127.0.0.1:5500/QUIZ_html.html');
   })
   

   next_button.style.display = "block";
   count_ques = 0

}





function handleNextButton() {
   current_question_index++;
   if (current_question_index < questions.length) {
      showQuestion();


   } else {
      showScore();
   }
}
function handleSkipButton() {
   current_question_index+=2;
   if (current_question_index < questions.length) {
      showQuestion();


   } else {
      showScore();
   }
}

next_button.addEventListener("click", () => {
   if (current_question_index < questions.length) {
      handleNextButton();
      time = 0
      document.getElementById("Timer").innerHTML = time;
                                                                       // Set function on next button..............................

   } else {
      startQuiz();
   }

})

skip_button.addEventListener("click", () => {
   if (current_question_index < questions.length) {
      clearInterval(timeInterval);
      handleSkipButton();
      time = 0
                                                               // Also available  SKIP  BUTTON.................
   } else {
      startQuiz();
   }

})

startQuiz();




    
