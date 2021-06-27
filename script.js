const quiezDB = [
{
	question:"Q1:What is the full form of html?",
	a:"hello to my land",
	b:"hey text markup language",
	c:"hypertext markup language",
	d:"hypertext makeup language",
	ans:"ans3"
},
{
	question:"Q2:What is the full form of css?",
	a:"cyber seftey security",
	b:"chalo sath sath",
	c:"cartoon style sheet",
	d:"cascading style sheet",
	ans:"ans4"
},
{
	question:"Q3:What is the full form of http?",
	a:"hypertext transfer product",
	b:"hypertext test protocol",
	c:"hey transfer protocol",
	d:"hypertext transfer protocol",
	ans:"ans4"
   }
 ];

 const question = document.querySelector('.question');
 const option1 = document.querySelector('#option1');
 const option2 = document.querySelector('#option2');
 const option3 = document.querySelector('#option3');
 const option4 = document.querySelector('#option4');
 const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
 let questionCount = 0;
 let score = 0;

 const loadQuestion = () =>{
    
    const questionList = quiezDB[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
 }
 loadQuestion();

  const getCheckAnswer = () => {
  	let answer;
  	answers.forEach((curAnsEle )=>{

  		if (curAnsEle.checked) {
  			answer = curAnsEle.id;
  		}

  	

  	});
  	return answer;

 };

  const deselectAll = () =>{
  	answers.forEach((curAnsEle) =>curAnsEle.checked=false);
  } 



 submit.addEventListener('click',()=>{
 	const checkAnswer = getCheckAnswer();
 	console.log(checkAnswer);

 	if (checkAnswer == quiezDB[questionCount].ans) {
 		score++;
 	};
 	questionCount++;
 	deselectAll();
 	if (questionCount<quiezDB.length) {
 		loadQuestion();
 	}
 	else{
 		showScore.innerHTML = `
 		<h3>your score ${score}/${quiezDB.length}</h3>
 		<button class="btn" onclick="location.reload()">play again</button>
 		`;

 		showScore.classList.remove('score-area');
 	}
 });

