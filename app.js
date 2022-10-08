(()=>{

    /**
     *           ************** QUESTIONS **************
     */

    const question = ['En çok içilen sıvı nedir?','Su','Kola','Ayran','Fanta']
    
    const question1 = ['Türkiyenin en büyük takımı nedir','Galatasaray','Fenerbahçe','Beşiktaş','Trabzon']
    
    const question2 = ['Dünyanın uydusu nedir?','Ay','Satürn','Neptün','Güneş']
    
    const question3 = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi distinctio reiciendis reprehenderit nihil fugiat omnis eveniet architecto? Neque error reprehenderit minima omnis laboriosam, cumque rerum doloribus ratione iusto, soluta molestiae accusamus recusandae beatae atque quam, at distinctio? Veritatis aperiam in suscipit, debitis aliquam numquam sapiente obcaecati quam nulla voluptatum quidem!','83 Milyon','70 Milyon', '65 Milyon', '50 milyon']

    const question4 = ['Dünya\'da kaç kıta vardır ?','4','5','6','7']

    const questions = [question,question1,question2,question3,question4]

    console.log(questions[4])

    //  QUESTION CHOOSER FUNCTION

    async function questionChooser(){

        const random_index = Math.round( Math.random() * (questions.length - 1) )
        console.log(random_index)

        const curPart = questions[random_index]
        const question = await curPart[0]
        let trueAnswer = curPart[1]
        const allAnswers = [trueAnswer,curPart[2],curPart[3],curPart[4]] 
        console.log(allAnswers)
        let A_answer;
        let B_answer;
        let C_answer;
        let D_answer;

        let writtenAnswers = [A_answer,B_answer,C_answer,D_answer]

        for(let i = allAnswers.length-1; i >= 0; i--){
            
            const answerIndex = Math.round(Math.random() * (allAnswers.length - 1))
            console.log(allAnswers[answerIndex])
            writtenAnswers[i] = allAnswers[answerIndex]
            
            if(i == writtenAnswers.length-1){
                document.querySelector('#D').innerHTML = writtenAnswers[i]
            }
            else if(i == writtenAnswers.length -2){
                document.querySelector('#C').innerHTML = writtenAnswers[i]
            }
            else if (i== writtenAnswers.length -3){
                document.querySelector('#B').innerHTML = writtenAnswers[i]
            }
            else if (i==writtenAnswers.length -4){
                document.querySelector('#A').innerHTML = writtenAnswers[i]
            }            
            allAnswers.splice(answerIndex,1)
        }

        document.querySelector('#question-text').innerHTML = question
        questions.splice(random_index,1)
    }
    questionChooser()

    const elements = document.querySelectorAll('.answer');
    for(let i = 0; i < elements.length; i++){
        elements[i].addEventListener('click',()=>{
            elements[i].classList.add('answer-selected')
            for(let j = 0; j< elements.length;j++){
                if(j != i){
                    elements[j].classList.remove('answer-selected')
                }
            }
        })
        elements[i].classList.remove('answer-selected')
    }
    
})()