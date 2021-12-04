// high-scores page link
var highScoresLink = document.createElement("h3");
highScoresLink.textContent = "View High Scores";
highScoresLink.className = "high-scores-link";
highScoresLink.id = "scores-link";
document.body.appendChild(highScoresLink);
highScoresLink.addEventListener("click", function() {
    welcomeMessage.classList.add("hide");
    welcomeMessageText.classList.add("hide");
    startButton.classList.add("hide");
    highScoresLink.classList.add("hide");
    highScoresList();
});

// "Welcome" message header
var welcomeMessage = document.createElement("h1");
welcomeMessage.textContent = "Welcome to the Code Quiz!";
welcomeMessage.className = "welcome-msg";
welcomeMessage.id = "welcome"
document.body.appendChild(welcomeMessage);

// "Welcome" message text
var welcomeMessageText = document.createElement("h3");
welcomeMessageText.textContent = "You will have 60 seconds to complete the quiz. Each wrong answer will subtract 10 seconds from the clock. If you complete the quiz before the clock runs out, the time remaining will be your final score. Click the 'START' button below to begin!";
welcomeMessageText.className = "welcome-msg-text";
welcomeMessageText.id = "welcome-text"
document.body.appendChild(welcomeMessageText);

// create 'Start' button container
var startButtonContainer = document.createElement("div");
startButtonContainer.className = "start-button-container";
startButtonContainer.id = "start-container";
document.body.appendChild(startButtonContainer);

// create 'Start' button
var startButton = document.createElement("button");
startButton.textContent = "START";
startButton.className = "start-button";
startButton.id = "start";
startButtonContainer.appendChild(startButton);

startButton.addEventListener("click", function() {
    welcomeMessage.classList.add("hide");
    welcomeMessageText.classList.add("hide");
    startButton.classList.add("hide");
    highScoresLink.classList.add("hide");
    startTimer()
    questionOne()
});

// create 'Timer'
var timer = document.createElement('div');
    timer.id = "timer";
    timer.className = "timer-style";
document.body.appendChild(timer);

var countdownTime;
var interval;

// start 'Timer'
function startTimer() {
    countdownTime = 60;
    timer.textContent = countdownTime;
    
    interval = setInterval(function() {
        countdownTime = countdownTime - 1;
        timer.textContent = countdownTime;
        if (countdownTime === 0) {
            clearInterval(interval);
            endQuiz()
        }
    }, 1000);
}
// if (countdownTime === 0){
//     clearInterval(interval);
//     endQuiz()
// };

// question 1
var questionOne;
function questionOne() {
    var questionOne = document.createElement('ul');
    document.body.appendChild(questionOne);
    questionOne.textContent = "1. What year was HTML 1.0 released?"
    var answerOne = document.createElement('li');
    questionOne.appendChild(answerOne)
    answerOne.textContent = "A:  1991"
    answerOne.addEventListener("click", function() {
        alert("Wrong!")
        countdownTime = countdownTime - 10;
        questionOne.classList.add("hide")
        answerOne.classList.add("hide")
        questionTwo()
    });
    var answerTwo = document.createElement('li'); {
    questionOne.appendChild(answerTwo)
    answerTwo.textContent = "B:  1992"
    answerTwo.addEventListener("click", function() {
        alert("Wrong!")
        countdownTime = countdownTime - 10;
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
        // highScore.innerHTML += 20;
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
        countdownTime = countdownTime - 10;
        questionOne.classList.add("hide")
        answerFour.classList.add("hide")
        questionTwo()
    });
    }
    // if (countdownTime === 0){
    //     questionOne.classList.add("hide");
    //     answerOne.classList.add("hide");
    //     answerTwo.classList.add("hide");
    //     answerThree.classList.add("hide");
    //     answerFour.classList.add("hide");
    //     clearInterval(interval);
    //     endQuiz()
    // };
}

// question 2
var questionTwo;
function questionTwo() {
    var questionTwo = document.createElement('ul');
    document.body.appendChild(questionTwo);
    questionTwo.textContent = "2. What is the correct syntax to 'comment out' code in JavaScript?"
    var answerOne = document.createElement('li');
    questionTwo.appendChild(answerOne)
    answerOne.textContent = "A:  <!-- --!>"
    answerOne.addEventListener("click", function() {
        alert("Wrong!")
        countdownTime = countdownTime - 10;
        questionTwo.classList.add("hide")
        answerOne.classList.add("hide")
        questionThree()
    });
    var answerTwo = document.createElement('li'); {
    questionTwo.appendChild(answerTwo)
    answerTwo.textContent = "B:  //"
    answerTwo.addEventListener("click", function() {
        alert("Correct!")
        // highScore.innerHTML += 20;
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
        countdownTime = countdownTime - 10;
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
        countdownTime = countdownTime - 10;
        questionTwo.classList.add("hide")
        answerFour.classList.add("hide")
        questionThree()
    });
    }
    // if (countdownTime === 0){
    //     questionTwo.classList.add("hide");
    //     answerOne.classList.add("hide");
    //     answerTwo.classList.add("hide");
    //     answerThree.classList.add("hide");
    //     answerFour.classList.add("hide");
    //     clearInterval(interval);
    //     endQuiz()
    // }
};

// question 3
var questionThree;
function questionThree() {
    var questionThree = document.createElement('ul');
    document.body.appendChild(questionThree);
    questionThree.textContent = "3. Which Git command is used to combine two branches within the same project?"
    var answerOne = document.createElement('li');
    questionThree.appendChild(answerOne)
    answerOne.textContent = "A:  Push"
    answerOne.addEventListener("click", function() {
        alert("Wrong!")
        countdownTime = countdownTime - 10;
        questionThree.classList.add("hide")
        answerOne.classList.add("hide")
        questionFour()
    });
    var answerTwo = document.createElement('li'); {
    questionThree.appendChild(answerTwo);
    answerTwo.textContent = "B:  Commit"
    answerTwo.addEventListener("click", function() {
        alert("Wrong!")
        countdownTime = countdownTime - 10;
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
        countdownTime = countdownTime - 10;
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
        // highScore.innerHTML += 20;
        questionThree.classList.add("hide")
        answerFour.classList.add("hide")
        questionFour()
    });
    }
    // if (countdownTime === 0){
    //     questionThree.classList.add("hide");
    //     answerOne.classList.add("hide");
    //     answerTwo.classList.add("hide");
    //     answerThree.classList.add("hide");
    //     answerFour.classList.add("hide");
    //     clearInterval(interval);
    //     endQuiz()
    // }
};

// question 4
var questionFour;
function questionFour() {
    var questionFour = document.createElement('ul');
    document.body.appendChild(questionFour);
    questionFour.textContent = "4. What is the correct syntax for referring to an external script called 'title.js'?"
    var answerOne = document.createElement('li');
    questionFour.appendChild(answerOne)
    answerOne.textContent = "A:  <script src='title.js'>"
    answerOne.addEventListener("click", function() {
        alert("Correct!")
        // highScore.innerHTML += 20;
        questionFour.classList.add("hide")
        answerOne.classList.add("hide")
        questionFive()
    });
    var answerTwo = document.createElement('li'); {
    questionFour.appendChild(answerTwo);
    answerTwo.textContent = "B:  <script name='title.js'>"
    answerTwo.addEventListener("click", function() {
        alert("Wrong!")
        countdownTime = countdownTime - 10;
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
        countdownTime = countdownTime - 10;
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
        countdownTime = countdownTime - 10;
        questionFour.classList.add("hide")
        answerFour.classList.add("hide")
        questionFive()
    });
    }
    // if (countdownTime === 0) {
    //     questionFour.classList.add("hide");
    //     answerOne.classList.add("hide");
    //     answerTwo.classList.add("hide");
    //     answerThree.classList.add("hide");
    //     answerFour.classList.add("hide");
    //     clearInterval(interval);
    //     endQuiz()
    // }
};

// question 5
var questionFive;
function questionFive() {
    var questionFive = document.createElement('ul');
    document.body.appendChild(questionFive);
    questionFive.textContent = "5. What is the correct way to write a JavaScript array?"
    var answerOne = document.createElement('li');
    questionFive.appendChild(answerOne)
    answerOne.textContent = "A:  var fruits = 'apple', 'orange', 'grape'"
    answerOne.addEventListener("click", function() {
        alert("Wrong!")
        countdownTime = countdownTime - 10;
        questionFive.classList.add("hide")
        answerOne.classList.add("hide")
        endQuiz()
    });
    var answerTwo = document.createElement('li'); {
    questionFive.appendChild(answerTwo);
    answerTwo.textContent = "B:  var fruits = ['apple', 'orange', 'grape']"
    answerTwo.addEventListener("click", function() {
        alert("Correct!")
        // highScore.innerHTML += 20;
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
        countdownTime = countdownTime - 10;
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
        countdownTime = countdownTime - 10;
        questionFive.classList.add("hide")
        answerFour.classList.add("hide")
        endQuiz()
    });
    }
    // if (countdownTime === 0){
    //     questionFive.classList.add("hide");
    //     answerOne.classList.add("hide");
    //     answerTwo.classList.add("hide");
    //     answerThree.classList.add("hide");
    //     answerFour.classList.add("hide");
    //     clearInterval(interval);
    //     endQuiz()
    // }
};


// var highScores = countdownTime
// var playerPoints = 0

function endQuiz() {
    // highScoresLink.classList.remove("hide");
    // var highScoresArray = JSON.parse(localStorage.getItem("interval")) || [];
    // var highScoresArray = document.createElement("h3");
    // document.body.appendChild(highScoresArray);
    var yourHighScore = document.createElement("h1");
    yourHighScore.textContent = "Here is your high score: ";
    yourHighScore.id = "high-score";
    yourHighScore.className = "your-high-score";
    document.body.appendChild(yourHighScore);

    var initialsInstructions = document.createElement("h3");
    initialsInstructions.textContent = "Please enter your initials below:";
    initialsInstructions.id = "initials";
    initialsInstructions.className = "initials-instructions";
    document.body.appendChild(initialsInstructions);

    var initialsInputContainer = document.createElement("div");
    initialsInputContainer.id = "initials-container";
    initialsInputContainer.className = "initials-input-container";
    document.body.appendChild(initialsInputContainer);

    var initialsInput = document.createElement("input");
    initialsInput.id = "input";
    initialsInput.className = "initials-input";
    initialsInputContainer.appendChild(initialsInput);
    document.getElementById("input").setAttribute('maxlength',2);
    // function allLetter (initialsInput) {
    //   { 
    //   var letters = /^[A-Za-z]+$/;
    //   if(initialsInput.value.match(letters))
    //   {
    //   alert('Your name have accepted : you can try another');
    //   return true;
    //   }
    //   else
    //   {
    //   alert('Please input alphabet characters only');
    //   return false;
    //   }
    //   }
    // }
    // highScoresArray.textContent = "View High Scores";
    // highScoresArray.className = "high-scores-link";
    // highScoresArray.id = "scores-link";
    // create 'Submit' button container
    var submitButtonContainer = document.createElement("div");
    submitButtonContainer.className = "submit-button-container";
    submitButtonContainer.id = "submit-container";
    document.body.appendChild(submitButtonContainer);

    var submitButton = document.createElement("button");
    submitButton.textContent = "SUBMIT";
    submitButton.className = "submit-button";
    submitButton.id = "submit";
    submitButtonContainer.appendChild(submitButton);
    submitButton.addEventListener("click", function() {
        yourHighScore.classList.add("hide");
        initialsInstructions.classList.add("hide");
        initialsInputContainer.classList.add("hide");
        initialsInput.classList.add("hide");
        submitButton.classList.add("hide");
        highScoresLink.classList.add("hide");
        timer.classList.add("hide");
        highScoresList();
    });
    clearInterval(interval);
    // localStorage.setItem("interval", highScore);
}

// function highScorePage() {
// var highScore = document.createElement("div");
// document.body.appendChild(highScore);
// }
// saves highScore to localStorage - PUT THIS IN 'SUBMIT' BUTTON FUNCTION

function highScoresList() {
    var highScoresList = document.createElement("ul");
    highScoresList.textContent = "HIGH SCORES";
    highScoresList.className = "high-scores";
    highScoresList.id = "scores";
    document.body.appendChild(highScoresList);

    var playAgainButtonContainer = document.createElement("div");
    playAgainButtonContainer.className = "play-again-button-container";
    playAgainButtonContainer.id = "play-again-container";
    document.body.appendChild(playAgainButtonContainer);

    var playAgainButton = document.createElement("button");
    playAgainButton.textContent = "PLAY AGAIN";
    playAgainButton.className = "play-again-button";
    playAgainButton.id = "play-again";
    playAgainButtonContainer.appendChild(playAgainButton);
    playAgainButton.addEventListener("click", function() {
        highScoresList.classList.add("hide");
        playAgainButtonContainer.classList.add("hide");
        playAgainButton.classList.add("hide");
        getMeOutButtonContainer.classList.add("hide");
        getMeOutButton.classList.add("hide");
        startTimer();
        questionOne();
    });

    var getMeOutButtonContainer = document.createElement("div");
    getMeOutButtonContainer.className = "get-me-out-button-container";
    getMeOutButtonContainer.id = "get-out-container";
    document.body.appendChild(getMeOutButtonContainer);

    var getMeOutButton = document.createElement("button");
    getMeOutButton.textContent = "GET ME OUTTA HERE";
    getMeOutButton.className = "get-me-out-button";
    getMeOutButton.id = "get-out";
    getMeOutButtonContainer.appendChild(getMeOutButton);
    getMeOutButton.addEventListener("click", function URL() {
        location.href = "http://www.google.com";
    });
}

// high-scores page
// function endQuiz() {
//     var stopHighScore = 
//     // var highScores = countdownTime
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