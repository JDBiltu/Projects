const questions = [

    //......................................question 1...................................................
    {
        Question : `Alfred buys an old scooter for Rs. 4700and spends Rs. 800 on its repairs. If hesells the scooter for Rs. 5800, his gainpercent is:`,
         answers : [
            {text : "4 4/7%", correct : false},
            {text : "5 5/11%", correct : true},
            {text : "10 %", correct : false},
            {text : "12%", correct : false}
            
         ]
    },
     //......................................question 2...................................................
    {
        Question : `The cost price of 20 articles isthe same as the selling price of xarticles. If the profit is 25%, then the value of x is:`,
         answers : [
            {text : "15", correct : false},
            {text : "16", correct : true},
            {text : "18", correct : false},
            {text : "25", correct : false}
            
         ]
    },
     //......................................question 3...................................................
    {
        Question : `If selling price is doubled,the profit triples. Find the profit percent.`,
         answers : [
            {text : "66 2/3", correct : false},
            {text : "100", correct : true},
            {text : "105 1/3", correct : false},
            {text : "120", correct : false}
            
         ]
    },
     //......................................question 4...................................................
    {
        Question : `In a certain store, the profitis 320% of the cost. If the cost increases by 25% but the selling price remains constant, approximately what percentage of the selling price is the profit?`,
         answers : [
            {text : "30 % ", correct : false},
            {text : "250 %", correct : false},
            {text : "100 %", correct : false},
            {text : "70 %", correct : true}
            
         ]
    },
     //......................................question 5...................................................
    {
        Question : `A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?`,
         answers : [
            {text : "3", correct : false},
            {text : "4", correct : false},
            {text : "5", correct : true},
            {text : "6", correct : false}
            
         ]
    },
     //......................................question 6...................................................
    {
        Question : `The percentage profit earned by selling an article for Rs. 1920 is equal to thepercentage loss incurred by selling thesame article for Rs. 1280. At what price should the article be sold to make 25% profit?`,
         answers : [
            {text : "2200", correct : false},
            {text : "2400", correct : false},
            {text : "2450", correct : false},
            {text : "2000", correct : true}
            
         ]
    },
     //......................................question 7..................................................
    {
        Question : `A shopkeeper expects a gain of 22.5%on his cost price. If in a week, his sale was of Rs. 392, what was his profit?`,
         answers : [
            {text : "72", correct : true},
            {text : "18.20", correct : false},
            {text : "70", correct : false},
            {text : "88.50", correct : false}
            
         ]
    },
     //......................................question 8...................................................
    {
        Question : `A man buys a cycle for Rs. 1400 and sells it at a loss of 15%. What is the selling price of the cycle?`,
         answers : [
            {text : "1202", correct : false},
            {text : "1090", correct : true},
            {text : "1160", correct : false},
            {text : "1244", correct : false}
            
         ]
    },
     //......................................question 9...................................................
    {
        Question : `Sam purchased 20 dozens of toysat the rate of Rs. 375 per dozen. Hesold each one of them at the rate of Rs. 33. What was his percentage profit?`,
         answers : [
            {text : "3.5", correct : false},
            {text : "4.5", correct : false},
            {text : "5.6", correct : true},
            {text : "6.5", correct : false}
            
         ]
    },
     //......................................question 10...................................................
    {
        Question : `Some articles were bought at 6 articles for Rs. 5 and sold at 5 articlesfor Rs. 6. Gain percent is:`,
         answers : [
            {text : "30%", correct : false},
            {text : "33 1/3%", correct : false},
            {text : "35%", correct : false},
            {text : "44%", correct : true}
            
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
   document.getElementById("text_text_qq").innerHTML = "Profit And Loss";

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




    
