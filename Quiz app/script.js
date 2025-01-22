const qusetion=[
    {
qusetion:"کدام حیوان بزرگ ترین حیوان دنیاست؟",
answers:[
    
       { text:"کوسه",correct:false},
       { text:"وال آبی",correct:true},
       { text:"فیل",correct:false},
       { text:"زرافه",correct:false},
]

    },
    {
        qusetion:"کدام درخت نماد صلح است؟",
        answers:[
            
               { text:"سرو",correct:false},
               { text:"زیتون",correct:true},
               { text:"سیب",correct:false},
               { text:"نارنج",correct:false},
        ]
        
            },
            {
                qusetion:"کدام حشره بیشترین طول عمر را  دارد؟",
                answers:[
                    
                       { text:"ملخ",correct:false},
                       { text:"عنکبوت",correct:false},
                       { text:"پشه",correct:false},
                       { text:"مورچه",correct:true},
                ]
                
                    },
                    {
                        qusetion:"کوچک ترین واحد ساختمان بدن انسان کدام است؟",
                        answers:[
                            
                               { text:"سلول",correct:true},
                               { text:"ژن",correct:false},
                               { text:"ملکول",correct:false},
                               { text:"عصب",correct:false},
                        ]
                        
                            }

];
let qusetionElemnt=document.getElementById("question");
let answersButton=document.getElementById("answer-button");
console.log( typeof answersButton)
let nextButton=document.getElementById("next-btn")

let currentQuestionIndex=0;
let score=0;
 function startQuiz(){
    currentQuestionIndex=0;
    score=0;
     nextButton.innerHTML="Next"
     showQuestion()
 }

 function showQuestion(){
    resetState()
    let currenquestion=qusetion[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    qusetionElemnt.innerHTML=questionNo+"."+currenquestion.qusetion;

currenquestion.answers.forEach(answer => {

const button=document.createElement("button");

button.innerHTML=answer.text;

button.classList.add("btn");

answersButton.appendChild(button);

if(answer.correct){

    button.dataset.correct=answer.correct
}
button.addEventListener('click',selectAnsewr)

    });

 }

function resetState(){
    nextButton.style.display="none";
    while(answersButton.firstChild){
answersButton.removeChild(answersButton.firstChild)

    }
  
}
function selectAnsewr(e){
let selctBtn=e.target;
let iscorrect=selctBtn.dataset.correct==="true"
if(iscorrect){
    selctBtn.classList.add("correct");
    score++
}
else{
    selctBtn.classList.add("incorrect");
}
Array.from(answersButton.children).forEach(button =>{
    if(button.dataset.correct==="true"){
        button.classList.add("correct");
    }
    button.disabled=true
});
nextButton.style.display='block'

}
function showscore(){
resetState()
qusetionElemnt.innerHTML=`امتیاز شما${score} از ${qusetion.length}!`
nextButton.innerHTML="شروع دوباره"
nextButton.style.display="block"
}
 function handelNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex<qusetion.length){
        showQuestion()
    
    }
    else{
        showscore()
    }

 }
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex< qusetion.length){
        handelNextButton()
    }
    else{
        startQuiz()
    }
})

 startQuiz()
