// High-scores page link
var highScoresLink = document.createElement("h3");
highScoresLink.textContent = "View High Scores";
highScoresLink.className = "high-scores-link";
highScoresLink.id = "scores-link";
document.body.appendChild(highScoresLink);

// "Welcome" message header
var welcomeMessage = document.createElement("h1");
welcomeMessage.textContent = "Welcome to the Code Quiz!";
welcomeMessage.className = "welcome-msg";
welcomeMessage.id = "welcome"
document.body.appendChild(welcomeMessage);

// "Welcome" message text
var welcomeMessageText = document.createElement("h3");
welcomeMessageText.textContent = "You will have 60 seconds to complete the quiz. Each correct answer is worth 20 points. Each wrong answer will subtract 10 seconds from the clock. Click the 'Start' button below to begin.";
welcomeMessageText.className = "welcome-msg-text";
welcomeMessageText.id = "welcome-text"
document.body.appendChild(welcomeMessageText);

// create 'Start' button
var startButton = document.createElement("button");
startButton.textContent = "Start";
startButton.className = "start-button";
startButton.id = "start";
document.body.appendChild(startButton);

// create 'Timer'
var timer = document.createElement('div');
document.body.appendChild(timer);
if (timer === 0) {
    endQuiz
}

startButton.addEventListener("click", function() {
    
    var countdownTime = 60;
    timer.textContent = countdownTime;
    timer.id = "timer";
    timer.className = "timer-style";
    setInterval(function() {
        countdownTime = countdownTime - 1;
        timer.textContent = countdownTime;
    }, 1000);

    welcomeMessage.classList.add("hide");
    welcomeMessageText.classList.add("hide");
    startButton.classList.add("hide");

    var questionOne = document.createElement('ul');
    document.body.appendChild(questionOne);
    questionOne.textContent = "1. What year was HTML 1.0 released?"
    var answerOne = document.createElement('li');
    questionOne.appendChild(answerOne)
    answerOne.textContent = "A:  1991"
    answerOne.addEventListener("click", function() {
        alert("Wrong!")
        questionOne.classList.add("hide")
        answerOne.classList.add("hide")
        questionTwo()
    });
    var answerTwo = document.createElement('li'); {
    questionOne.appendChild(answerTwo)
    answerTwo.textContent = "B:  1992"
    answerTwo.addEventListener("click", function() {
        alert("Wrong!")
        questionOne.classList.add("hide")
        answerTwo.classList.add("hide")
        questionTwo()
    });
    }
    var answerThree = document.createElement('li'); {
    questionOne.appendChild(answerThree)
    answerThree.textContent = "C:  1993"
    answerThree.addEventListener("click", function() {
        alert("Correct!")
        questionOne.classList.add("hide")
        answerThree.classList.add("hide")
        questionTwo()
    });
    }
    var answerFour = document.createElement('li'); {
    questionOne.appendChild(answerFour)
    answerFour.textContent = "D:  1994"
    answerFour.addEventListener("click", function() {
        alert("Wrong!")
        questionOne.classList.add("hide")
        answerFour.classList.add("hide")
        questionTwo()
    });
    }
});

function questionTwo() {
    var questionTwo = document.createElement('ul');
    document.body.appendChild(questionTwo);
    questionTwo.textContent = "2. What is the correct syntax to 'comment out' code in JavaScript?"
    var answerOne = document.createElement('li');
    questionTwo.appendChild(answerOne)
    answerOne.textContent = "A:  <!-- --!>"
    answerOne.addEventListener("click", function() {
        alert("Wrong!")
        questionTwo.classList.add("hide")
        answerOne.classList.add("hide")
        questionThree()
    });
    var answerTwo = document.createElement('li'); {
    questionTwo.appendChild(answerTwo)
    answerTwo.textContent = "B:  //"
    answerTwo.addEventListener("click", function() {
        alert("Correct!")
        questionTwo.classList.add("hide")
        answerTwo.classList.add("hide")
        questionThree()
    });
    }
    var answerThree = document.createElement('li'); {
    questionTwo.appendChild(answerThree)
    answerThree.textContent = "C:  -' '- "
    answerThree.addEventListener("click", function() {
        alert("Wrong!")
        questionTwo.classList.add("hide")
        answerThree.classList.add("hide")
        questionThree()
    });
    }
    var answerFour = document.createElement('li'); {
    questionTwo.appendChild(answerFour)
    answerFour.textContent = "D:  /*  */"
    answerFour.addEventListener("click", function() {
        alert("Wrong!")
        questionTwo.classList.add("hide")
        answerFour.classList.add("hide")
        questionThree()
    });
    }
};

function questionThree() {
    var questionThree = document.createElement('ul');
    document.body.appendChild(questionThree);
    questionThree.textContent = "3. Which Git command is used to combine two branches within the same project?"
    var answerOne = document.createElement('li');
    questionThree.appendChild(answerOne)
    answerOne.textContent = "A:  Push"
    answerOne.addEventListener("click", function() {
        alert("Wrong!")
        questionThree.classList.add("hide")
        answerOne.classList.add("hide")
        questionFour()
    });
    var answerTwo = document.createElement('li'); {
    questionThree.appendChild(answerTwo);
    answerTwo.textContent = "B:  Commit"
    answerTwo.addEventListener("click", function() {
        alert("Wrong!")
        questionThree.classList.add("hide")
        answerTwo.classList.add("hide")
        questionFour()
    });
    }
    var answerThree = document.createElement('li'); {
    questionThree.appendChild(answerThree)
    answerThree.textContent = "C:  Pull"
    answerThree.addEventListener("click", function() {
        alert("Wrong!")
        questionThree.classList.add("hide")
        answerThree.classList.add("hide")
        questionFour()
    });
    }
    var answerFour = document.createElement('li'); {
    questionThree.appendChild(answerFour)
    answerFour.textContent = "D:  Merge"
    answerFour.addEventListener("click", function() {
        alert("Correct!")
        questionThree.classList.add("hide")
        answerFour.classList.add("hide")
        questionFour()
    });
    }
};

function questionFour() {
    var questionFour = document.createElement('ul');
    document.body.appendChild(questionFour);
    questionFour.textContent = "4. What is the correct syntax for referring to an external script called 'title.js'?"
    var answerOne = document.createElement('li');
    questionFour.appendChild(answerOne)
    answerOne.textContent = "A:  <script src='title.js'>"
    answerOne.addEventListener("click", function() {
        alert("Correct!")
        questionFour.classList.add("hide")
        answerOne.classList.add("hide")
        questionFive()
    });
    var answerTwo = document.createElement('li'); {
    questionFour.appendChild(answerTwo);
    answerTwo.textContent = "B:  <script name='title.js'>"
    answerTwo.addEventListener("click", function() {
        alert("Wrong!")
        questionFour.classList.add("hide")
        answerTwo.classList.add("hide")
        questionFive()
    });
    }
    var answerThree = document.createElement('li'); {
    questionFour.appendChild(answerThree)
    answerThree.textContent = "C:  <script href='title.js'>"
    answerThree.addEventListener("click", function() {
        alert("Wrong!")
        questionFour.classList.add("hide")
        answerThree.classList.add("hide")
        questionFive()
    });
    }
    var answerFour = document.createElement('li'); {
    questionFour.appendChild(answerFour)
    answerFour.textContent = "D:  <script id='title.js'>"
    answerFour.addEventListener("click", function() {
        alert("Wrong!")
        questionFour.classList.add("hide")
        answerFour.classList.add("hide")
        questionFive()
    });
    }
};

function questionFive() {
    var questionFive = document.createElement('ul');
    document.body.appendChild(questionFive);
    questionFive.textContent = "5. What is the correct way to write a JavaScript array?"
    var answerOne = document.createElement('li');
    questionFive.appendChild(answerOne)
    answerOne.textContent = "A:  var fruits = 'apple', 'orange', 'grape'"
    answerOne.addEventListener("click", function() {
        alert("Wrong!")
        questionFive.classList.add("hide")
        answerOne.classList.add("hide")
        endQuiz()
    });
    var answerTwo = document.createElement('li'); {
    questionFive.appendChild(answerTwo);
    answerTwo.textContent = "B:  var fruits = ['apple', 'orange', 'grape']"
    answerTwo.addEventListener("click", function() {
        alert("Correct!")
        questionFive.classList.add("hide")
        answerTwo.classList.add("hide")
        endQuiz()
    });
    }
    var answerThree = document.createElement('li'); {
    questionFive.appendChild(answerThree)
    answerThree.textContent = "C:  var fruits = (1='apple', 2='orange', 3='grape')"
    answerThree.addEventListener("click", function() {
        alert("Wrong!")
        questionFive.classList.add("hide")
        answerThree.classList.add("hide")
        endQuiz()
    });
    }
    var answerFour = document.createElement('li'); {
    questionFive.appendChild(answerFour)
    answerFour.textContent = "D:  var fruits = 1=('apple'), 2=('orange'), 3=('grape')"
    answerFour.addEventListener("click", function() {
        alert("Wrong!")
        questionFive.classList.add("hide")
        answerFour.classList.add("hide")
        endQuiz()
    });
    }
};

// function endQuiz() {

// }




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








// for each loop = iterate over an array, creates ordered list. add event listener to ordered list.

// if question count = more than number of questions OR if timer reaches 0, then go to endgame function ('see high score, add initials, choice to play again)