// create 'Start' button
var startButton = document.createElement("button");
startButton.textContent = "Start";
startButton.className = "btn start-button";
startButton.id = "start";
document.body.appendChild(startButton);

startButton.addEventListener("click", function() {
    alert("button clicked");
  });

  
var timer = document.createElement('div');
document.body.appendChild(timer);

startButton.addEventListener("click", function() {
    // setTimeout() //add timed event 60-second countdown - CODE FOR TIMER IN MODULE 4
    setInterval(function() {
        timer.textContent = 60;
        timer.id = "timer";
        timer.className = "timer-style";
    }, 1000);
});





// var allQuestions = [
    // {questionOne: "test text"},
    // {questionText: "2nd question"},
    // {answerChoiceOne: ""}
// ]

// var questionOne = {
//     questionText: "favorite apple?",
//     answerOneText: "honeycrisp"
// }

// var questionOneEl = document.createElement('div')
//     questionOne.textContent = "Favorite fruit?";
//     answerOne.textContent = "apples";
//     answerTwo.textContent = "oranges";
//     answerThree.textContent = "pears";
//     answerFour.textContent = "bananas"
// document.body.appendChild(questionOneEl)
// document.body.appendChild(answerOne)
// document.body.appendChild(answerTwo)
// document.body.appendChild(answerThree)
// document.body.appendChild(answerFour)


// startButton.innerHTML = "START";





var questionOne = document.createElement('ul');
    questionOne.textContent = "Questions about fruits"
document.body.appendChild(questionOne); 

var answerOne = document.createElement('li'); {
    answerOne.textContent = "Do you like apples?"
}
var answerTwo = document.createElement('li'); {
    answerTwo.textContent = "Do you like oranges?"
}

var answerThree = document.createElement('li'); {
    answerThree.textContent = "Do you like pears?"
}

var answerFour = document.createElement('li'); {
    answerFour.textContent = "Do you like grapes?"
}

document.body.appendChild(questionOne)
questionOne.appendChild(answerOne)
questionOne.appendChild(answerTwo)
questionOne.appendChild(answerThree)
questionOne.appendChild(answerFour)


// for each loop = iterate over an array, creates ordered list. add event listener to ordered list.

// if question count = more than number of questions OR if timer reaches 0, then go to endgame function ('see high score, add initials, choice to play again)