function capitalise(param){
    const lower = param;
    const upper = param.charAt(0).toUpperCase() + lower.substring(1);
    return upper;
    //With regex
    //const upper = lower.replace(/^\w/, c => c.toUpperCase());
}


var url ='';
let params = new URLSearchParams(location.search);
var answer = params.get('answer');
var username = params.get('username');
if(answer == 'geography')
{
     url = 'https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple';
}else if(answer == 'informatic')
{
    //url = 'https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple'
    url = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple';
}

document.getElementById("username").innerText = "Welcome "+capitalise(username);
document.getElementById("answer").innerText = capitalise(answer);

//Comment the code above to use this line
//var url = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple';

fetch(url)
.then((resp) => resp.json())
.then(function (data){
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }
   
    let questions = data.results;
    var questionsArray = []; //array of questions
    var choicesArray = []; //array of choices
    var answersArray = []; //array of responses
   

    //Retrieving all the answers
    for (let index = 0; index < 10; index++) {
        answersArray.push(questions[index].correct_answer);
    }

    //Retrieving all the multiple choices
    for (let index = 0; index < 10; index++) {
        var choices = questions[index].incorrect_answers;
        choices.push(answersArray[index]);
        shuffle(choices);
        choicesArray.push(choices);
    }
   
    //Retrieving all the questions
    for (let index = 0; index < 10; index++) {
        questionsArray.push(questions[index].question);
    }
    
    //Sending data to the DOM
    var compteur = 1;
    for (let index = 0; index < 10; index++) {
        document.getElementById("container" + (index + 1)).innerHTML = `
        <p id="p${index+1}" class="is-size-4"></p>
        <div class="columns">
            <div class="column is-narrow has-text-left is-6 is-offset-5">
                <form>
                    <ul id="ul${index+1}"></ul >
                    <p id="r${index+1}" class="is-size-4 is-hidden">${answersArray[index]}</p>
                </form>
            </div>
        </div> <hr>`;
        document.getElementById("p" + (index + 1)).innerText = index+1+")"+" "+questionsArray[index];
        document.getElementById("ul" + (index + 1)).innerHTML = `
        <li id="li${compteur}" ><input type="radio" name="question${index}" value="${choicesArray[index][0]}"> ${choicesArray[index][0]}</li>
        <li id="li${compteur + 1}" ><input type="radio" name="question${index}" value="${choicesArray[index][1]}"> ${choicesArray[index][1]}</li>
        <li id="li${compteur + 2}" ><input type="radio" name="question${index}" value="${choicesArray[index][2]}"> ${choicesArray[index][2]}</li>
        <li id="li${compteur + 3}" ><input type="radio" name="question${index}" value="${choicesArray[index][3]}"> ${choicesArray[index][3]}</li>`;
        compteur+=4;
    }
    console.log("I'm the best !");

})
.catch(function(error){
    console.log(error);
})