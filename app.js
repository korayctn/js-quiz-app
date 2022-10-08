(() => {
  document.addEventListener("DOMContentLoaded", function(event) { 
    const question = [
      "What was Meta Platforms Inc formerly known as?",
      "Facebook",
      "Tesla",
      "Google",
      "Twitter",
    ];
  
    const question1 = [
      "Which English city is known as the Steel City?",
      "Sheffield",
      "Manchester",
      "London",
      "Liverpool",
    ];
  
    const question2 = [
      "The logo for luxury car maker Porsche features which animal?",
      "Horse",
      "Tiger",
      "Lion",
      "Giraffe",
    ];
  
    const question3 = [
      "Suriname is located on which continent?",
      "South America",
      "Europe",
      "North America",
      "Asia",
    ];
  
    const question4 = [
      "According to George Orwell, who is watching us?",
      "Big Brother",
      "Big Sister",
      "Great Father",
      "Great Mother",
    ];
  
    const questions = [question, question1, question2, question3, question4];
    let overallPoint = 0;
  
    //  QUESTION CHOOSER FUNCTION
    const pointPerQuestion = 100 / questions.length;

    function questionChooser() {
      // there is still questions
  
      if (questions.length != 0) {
        const random_index = Math.round(Math.random() * (questions.length - 1));
  
        const curPart = questions[random_index];
        const question = curPart[0];
        let trueAnswer = curPart[1];
        const allAnswers = [trueAnswer, curPart[2], curPart[3], curPart[4]];
        let A_answer;
        let B_answer;
        let C_answer;
        let D_answer;
        console.log(questions);
  
        let writtenAnswers = [A_answer, B_answer, C_answer, D_answer];
  
        for (let i = allAnswers.length - 1; i >= 0; i--) {
          const answerIndex = Math.round(Math.random() * (allAnswers.length - 1));
          writtenAnswers[i] = allAnswers[answerIndex];
  
          if (i == writtenAnswers.length - 1) {
            document.querySelector("#d").innerHTML = writtenAnswers[i];
          } else if (i == writtenAnswers.length - 2) {
            document.querySelector("#c").innerHTML = writtenAnswers[i];
          } else if (i == writtenAnswers.length - 3) {
            document.querySelector("#b").innerHTML = writtenAnswers[i];
          } else if (i == writtenAnswers.length - 4) {
            document.querySelector("#a").innerHTML = writtenAnswers[i];
          }
          allAnswers.splice(answerIndex, 1);
        }
        const a_ans = document.querySelector('#a')
        const b_ans = document.querySelector('#b')
        const c_ans = document.querySelector('#c')
        const d_ans = document.querySelector('#d')
        
        a_ans.addEventListener('click',answerCallback)
        b_ans.addEventListener('click',answerCallback)
        c_ans.addEventListener('click',answerCallback)
        d_ans.addEventListener('click',answerCallback)
  
        function answerCallback(){
          if(this == a_ans){
            this.classList.add("answer-selected");
            b_ans.classList.remove("answer-selected");
            c_ans.classList.remove("answer-selected");
            d_ans.classList.remove("answer-selected");
          }
          else if(this == b_ans){
            this.classList.add("answer-selected");
            c_ans.classList.remove("answer-selected");
            d_ans.classList.remove("answer-selected");
            a_ans.classList.remove("answer-selected");
          }
          else if(this == c_ans){
            this.classList.add("answer-selected");
            d_ans.classList.remove("answer-selected");
            a_ans.classList.remove("answer-selected");
            b_ans.classList.remove("answer-selected");
          }
          else if(this == d_ans){
            this.classList.add("answer-selected");
            a_ans.classList.remove("answer-selected");
            b_ans.classList.remove("answer-selected");
            c_ans.classList.remove("answer-selected");
          }
          document.querySelector(".fa-check").style.visibility = "visible";
        }
  
        document.querySelector("#question-text").innerHTML = question;
  
        document.querySelector('.fa-check').addEventListener('click',async function(){
          const selected = await document.querySelector('[class="answer answer-selected"]');
          console.log(selected.innerHTML)
          
          if(selected.innerHTML == trueAnswer){
            overallPoint += pointPerQuestion
            console.log(overallPoint)
          }
          await questions.splice(random_index, 1);
  
          a_ans.classList.remove("answer-selected");
          b_ans.classList.remove("answer-selected");
          c_ans.classList.remove("answer-selected");
          d_ans.classList.remove("answer-selected");
          
          questionChooser()
        })
      }
      // there is no question
      else {
        document.querySelector("body").innerHTML = `<div id="score-table">
              <h3>Skorunuz : ${overallPoint}</h3>
          </div>`;
      }
    }
    questionChooser();
  });
})();
