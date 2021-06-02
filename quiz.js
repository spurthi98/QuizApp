const quesDb = [
  {
    question : "Q1. What is full form of HTML?" ,
    a : "Hyper Text Markup Language",
    b : "High Tech Markup Language" , 
    c : "Hyper Tight Markup Language" , 
    d : "Hyper Text Middleman Language",
    answer : "ans1"
  },
  {
    question : "Q2. What is full form of HTTP?" ,
    a : "Hyper Text Tight Protocol",
    b : "Hypper Text Transfer Protocol" , 
    c : "Hyper Tight Transfer Product" , 
    d : "Hyper Text Telling Protocol",
    answer : "ans2"
  },
  {
    question : "Q3. What is full form of www?" ,
    a : "World Wide Web",
    b : "What When Where" , 
    c : "Why Why Why" , 
    d : "Who Who Where",
    answer : "ans1"
  },
  {
    question : "Q4. What is full form of CSS?" ,
    a : "Cascading Style Sheets",
    b : "Can't See Sorry" , 
    c : "Can She Sit" , 
    d : "Cascading Sheet Style",
    answer : "ans1"
  },
];

/* data from index.html*/
const question = document.querySelector('.question');
const option1 = document.querySelector('#opt1');
const option2 = document.querySelector('#opt2');
const option3 = document.querySelector('#opt3');
const option4 = document.querySelector('#opt4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.radio');
const showScore = document.querySelector('#showscore');

let i = 0;
let score=0;

const loadQuestion = () => {
   const questionList = quesDb[i];
  console.log(questionList);
  
   question.innerText = questionList.question;
   option1.innerHTML = questionList.a;
   option2.innerHTML = questionList.b;
   option3.innerHTML = questionList.c;
   option4.innerHTML = questionList.d;

}

loadQuestion();

const getAnswer = () =>{
  let answerid;
  
  answers.forEach((curAns)=>{
         if(curAns.checked){
            answerid = curAns.id;
         }
  });
  return answerid;
}

const deselect = () => {
  answers.forEach((curAns)=>{
    curAns.checked = false ; 
});

}

submit.addEventListener('click',()=>{
  const currentAnswer = getAnswer();

  
  if(currentAnswer == quesDb[i].answer){
    score++;
  }

  i++;
  deselect();
  if(i<quesDb.length){
    loadQuestion();
  }
  else{
      
     showScore.innerHTML=`
      <h3> Your score is : ${score} / ${quesDb.length} </h3>
      <button class="btn" onclick="location.reload()">Play Again</button>
     `;

     showScore.classList.remove('score');
  }
});
