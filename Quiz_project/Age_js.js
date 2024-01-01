const questions = [

    //......................................question 1...................................................
    {
        Question : `Father is aged three times more than his son Ronit. After 8 years, he would be two anda half times of Ronit's age. After further 8 years, how many times would he be of Ronit's age?`,
         answers : [
            {text : "2 times", correct : true},
            {text : "2 1/2 times", correct : false},
            {text : "2 3/4 times", correct : false},
            {text : "3 times", correct : false}
            
         ]
    },
     //......................................question 2...................................................
    {
        Question : `The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?`,
         answers : [
            {text : "10 years", correct : false},
            {text : "8 years", correct : false},
            {text : "4 years", correct : true},
            {text : "None of these", correct : false}
            
         ]
    },
     //......................................question 3...................................................
    {
        Question : `A father said to his son, "I wasas old as you are at the present atthe time of your birth". If the father'sage is 38 years now, the son's age fiveyears back was:`,
         answers : [
            {text : "19 years", correct : false},
            {text : "14 years", correct : true},
            {text : "33 years", correct : false},
            {text : "38 years", correct : false}
            
         ]
    },
     //......................................question 4...................................................
    {
        Question : `A is two years older than B who is twice as old as C. If the total ofthe ages of A, B and C be 27, then how  old is B?`,
         answers : [
            {text : "7 ", correct : false},
            {text : "8", correct : false},
            {text : "9", correct : false},
            {text : "10", correct : true}
            
         ]
    },
     //......................................question 5...................................................
    {
        Question : `Present ages of Sameer and Anand are in the ratio of 5 : 4 respectively.Three years hence, the ratio of theirages will become 11 : 9 respectively. What is Anand's present age in years?`,
         answers : [
            {text : "24", correct : true},
            {text : "27", correct : false},
            {text : "40", correct : false},
            {text : "Cannot be determined", correct : false}
            
         ]
    },
     //......................................question 6...................................................
    {
        Question : `A man is 24 years older than hisson. In two years, his age will betwice the age of his son. The present age of his son is:`,
         answers : [
            {text : "14 years", correct : false},
            {text : "18 years", correct : false},
            {text : "20 years", correct : false},
            {text : "22 years", correct : true}
            
         ]
    },
     //......................................question 7..................................................
    {
        Question : `Six years ago, the ratio of the agesof Kunal and Sagar was 6 : 5. Four years  hence, the ratio of their ages will be  11 : 10. What is Sagar's age at present?`,
         answers : [
            {text : "16 years", correct : true},
            {text : "18 years", correct : false},
            {text : "20 years", correct : false},
            {text : "19 years", correct : false}
            
         ]
    },
     //......................................question 8...................................................
    {
        Question : `The sum of the present ages of a father and his son is 60 years.Six years ago, father's age was fivetimes the age of the son. After 6 years,son's age will be:`,
         answers : [
            {text : "15 years", correct : false},
            {text : "20 years", correct : true},
            {text : "25 years", correct : false},
            {text : "30 years", correct : false}
            
         ]
    },
     //......................................question 9...................................................
    {
        Question : `At present, the ratio between theages of Arun and Deepak is 4 : 3.After 6 years, Arun's age will be 26 years. What is the age of Deepak at present ?`,
         answers : [
            {text : "12 years", correct : false},
            {text : "15 years", correct : true},
            {text : "19 years", correct : false},
            {text : "21 years", correct : false}
            
         ]
    },
     //......................................question 10...................................................
    {
        Question : `Sachin is younger than Rahul by 7 years. If their ages are in the respective ratio of 7 : 9, how old is Sachin?`,
         answers : [
            {text : "18.5 years", correct : false},
            {text : "15.5 years", correct : false},
            {text : "20.5 years", correct : false},
            {text : "24.5 years", correct : true}
            
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
   document.getElementById("text_text_qq").innerHTML = "Age";

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
   document.getElementById("text_text_qq").innerHTML = "Age";         
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




    
