
const questions = [

   //......................................question 1...................................................
   {
      Question: "A can do a work in 15 days and B in 20 days. If they work on ittogether for 4 days, then the fractionof the work that is left is: ",
      answers: [
         { text: "1/4", correct: false },
         { text: "1/10", correct: false },
         { text: "7/15", correct: false },
         { text: "8/15", correct: true }

      ]
   },
   //......................................question 2...................................................
   {
      Question: "A can lay railway track between two given stations in 16 days and B can do the same job in 12  days.With help of C, they did the job in 4 days  only.Then, C alone can do the job in: ",
      answers: [
         { text: "9 1/5 days", correct: false },
         { text: "9 3/5 days", correct: true },
         { text: "9 2/5 days", correct: false },
         { text: "10 days", correct: false }

      ]
   },
   //......................................question 3...................................................
   {
      Question: "A, B and C can do a piece of work in 20, 30 and 60 days respectively.In how many days can A do the work if he is assisted by B and C on every third day?",
      answers: [
         { text: "12 days", correct: false },
         { text: "16 days", correct: false },
         { text: "15 days", correct: true },
         { text: "18 days", correct: false }

      ]
   },
   //......................................question 4...................................................
   {
      Question: "A is thrice as good as workman as B and therefore is able to finish a job in 60 days less than B.Working together, they can do it in: ",
      answers: [
         { text: "20 days", correct: false },
         { text: "22 1/2 days", correct: true },
         { text: "25 days", correct: false },
         { text: "30 days", correct: false }

      ]
   },
   //......................................question 5...................................................
   {
      Question: "A alone can do a piece of work in 6 days and B alone in 8 days.A and B undertook to do it for Rs. 3200. With the help of C, they completed the work in 3 days. How much is to be paid to C?",
      answers: [
         { text: "375", correct: false },
         { text: "600", correct: false },
         { text: "400", correct: true },
         { text: "800", correct: false }

      ]
   },
   //......................................question 6...................................................
   {
      Question: "If 6 men and 8 boys can do a piece of work in 10 days while 26 men and 48 boys can do the same in 2 days, the time taken by 15 men and 20 boys in doing the same type of work will be: ",
      answers: [
         { text: "4 days", correct: true },
         { text: "5 days", correct: false },
         { text: "6 days", correct: false },
         { text: "7 days", correct: false }

      ]
   },
   //......................................question 7..................................................
   {
      Question: "A can do a piece of work in 4 hours, B and C together can do it in 3 hours, while  A and C together can do it in 2 hours.How long will B alone take to do it ? ",
      answers: [
         { text: "8 hours", correct: false },
         { text: "12 hours", correct: true },
         { text: "10 hours", correct: false },
         { text: "24 hours", correct: false }

      ]
   },
   //......................................question 8...................................................
   {
      Question: "A can do a certain work in the same time in which B and C together can do it.If A and B together could  do it in 10 days and C alone in 50 days, then B alone could do it in: ",
      answers: [
         { text: "15 days", correct: false },
         { text: "20 days", correct: false },
         { text: "25 days", correct: true },
         { text: "30 days", correct: false }

      ]
   },
   //......................................question 9...................................................
   {
      Question: "A does 80% of a work in 20 days.  He then calls in B and they together finish the remaining work in 3 days. How long B alone would take to do the whole work?",
      answers: [
         { text: "23 days", correct: false },
         { text: "37 days", correct: false },
         { text: "37 1/2 days", correct: true },
         { text: "40 days", correct: false }

      ]
   },
   //......................................question 10...................................................
   {
      Question: "A can finish a work in 18 days and B can do the same work in 15 days. B worked for 10 days and left the job. In how many days, A alone can finish the remaining work?",
      answers: [
         { text: "5", correct: false },
         { text: "5 1/2", correct: false },
         { text: "8", correct: false },
         { text: "6", correct: true }

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
   document.getElementById("text_text_qq").innerHTML = "Time And Work";

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




    
