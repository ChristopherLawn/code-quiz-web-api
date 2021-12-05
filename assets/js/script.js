// retrieve player initials info from localStorage
var userInitialsArray = JSON.parse(localStorage.getItem("userInitials")) || []; 

// retrieve player score info from localStorage
var highScoresArray = JSON.parse(localStorage.getItem("score")) || [];

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
welcomeMessageText.textContent = "You will have 30 seconds to complete the quiz. Each correct answer will add 10 seconds to the clock. Each wrong answer will subtract 10 seconds from the clock. If you complete the quiz before the clock runs out, the time remaining will be your final score. Click the 'START' button below to begin!";
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

// add event listener to 'Start' button
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
    countdownTime = 30;
    timer.textContent = countdownTime;
    interval = setInterval(function() {
        if (countdownTime === 0) {
            clearInterval(interval);
            hideQuestions();
            highScoresList();
            timer.textContent = countdownTime;
            return;
        };
        countdownTime = countdownTime - 1;
        timer.textContent = countdownTime;
    }, 1000);
}

// question 1
var questionOne;
function questionOne() {
    var questionOne = document.createElement('ul');
    questionOne.id = "question-one";
    questionOne.className = "question";
    document.body.appendChild(questionOne);
    questionOne.textContent = "1. Which is the correct way to write an 'IF' statement in JavaScript?"
    var answerOne = document.createElement('li');
    questionOne.appendChild(answerOne)
    answerOne.textContent = "A:  if i = 5"
    answerOne.addEventListener("click", function() {
        alert("Wrong!")
        if (countdownTime - 10 > 0) {
            countdownTime = countdownTime - 10;
          } else {
            countdownTime = 0;
          }
        questionOne.classList.add("hide")
        answerOne.classList.add("hide")
        questionTwo()
    });
    var answerTwo = document.createElement('li'); {
    questionOne.appendChild(answerTwo)
    answerTwo.textContent = "B:  if i == 5 then"
    answerTwo.addEventListener("click", function() {
        alert("Wrong!")
        if (countdownTime - 10 > 0) {
            countdownTime = countdownTime - 10;
          } else {
            countdownTime = 0;
          }
        questionOne.classList.add("hide")
        answerTwo.classList.add("hide")
        questionTwo()
    });
    }
    var answerThree = document.createElement('li'); {
    questionOne.appendChild(answerThree)
    answerThree.textContent = "C:  if (i == 5)"
    answerThree.addEventListener("click", function() {
        alert("Correct!")
        countdownTime = countdownTime + 10;
        questionOne.classList.add("hide")
        answerThree.classList.add("hide")
        questionTwo()
    });
    }
    var answerFour = document.createElement('li'); {
    questionOne.appendChild(answerFour)
    answerFour.textContent = "D:  if i = 5 then"
    answerFour.addEventListener("click", function() {
        alert("Wrong!")
        if (countdownTime - 10 > 0) {
            countdownTime = countdownTime - 10;
          } else {
            countdownTime = 0;
          }
        questionOne.classList.add("hide")
        answerFour.classList.add("hide")
        questionTwo()
    });
    }
}

// question 2
var questionTwo;
function questionTwo() {
    var questionTwo = document.createElement('ul');
    questionTwo.id = "question-two";
    document.body.appendChild(questionTwo);
    questionTwo.textContent = "2. What is the correct syntax to 'comment out' code in JavaScript?"
    var answerOne = document.createElement('li');
    questionTwo.appendChild(answerOne)
    answerOne.textContent = "A:  <!-- --!>"
    answerOne.addEventListener("click", function() {
        alert("Wrong!")
        if (countdownTime - 10 > 0) {
            countdownTime = countdownTime - 10;
          } else {
            countdownTime = 0;
          }
        questionTwo.classList.add("hide")
        answerOne.classList.add("hide")
        questionThree()
    });
    var answerTwo = document.createElement('li'); {
    questionTwo.appendChild(answerTwo)
    answerTwo.textContent = "B:  //"
    answerTwo.addEventListener("click", function() {
        alert("Correct!")
        countdownTime = countdownTime + 10;
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
        if (countdownTime - 10 > 0) {
            countdownTime = countdownTime - 10;
          } else {
            countdownTime = 0;
          }
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
        if (countdownTime - 10 > 0) {
            countdownTime = countdownTime - 10;
          } else {
            countdownTime = 0;
          }
        questionTwo.classList.add("hide")
        answerFour.classList.add("hide")
        questionThree()
    });
    }
};

// question 3
var questionThree;
function questionThree() {
    var questionThree = document.createElement('ul');
    questionThree.id = "question-three";
    document.body.appendChild(questionThree);
    questionThree.textContent = "3. Which operator is used to assign a value to a variable?"
    var answerOne = document.createElement('li');
    questionThree.appendChild(answerOne)
    answerOne.textContent = "A:  *"
    answerOne.addEventListener("click", function() {
        alert("Wrong!")
        if (countdownTime - 10 > 0) {
            countdownTime = countdownTime - 10;
          } else {
            countdownTime = 0;
          }
        questionThree.classList.add("hide")
        answerOne.classList.add("hide")
        questionFour()
    });
    var answerTwo = document.createElement('li'); {
    questionThree.appendChild(answerTwo);
    answerTwo.textContent = "B:  -"
    answerTwo.addEventListener("click", function() {
        alert("Wrong!")
        if (countdownTime - 10 > 0) {
            countdownTime = countdownTime - 10;
          } else {
            countdownTime = 0;
          }
        questionThree.classList.add("hide")
        answerTwo.classList.add("hide")
        questionFour()
    });
    }
    var answerThree = document.createElement('li'); {
    questionThree.appendChild(answerThree)
    answerThree.textContent = "C:  X"
    answerThree.addEventListener("click", function() {
        alert("Wrong!")
        if (countdownTime - 10 > 0) {
            countdownTime = countdownTime - 10;
          } else {
            countdownTime = 0;
          }
        questionThree.classList.add("hide")
        answerThree.classList.add("hide")
        questionFour()
    });
    }
    var answerFour = document.createElement('li'); {
    questionThree.appendChild(answerFour)
    answerFour.textContent = "D:  ="
    answerFour.addEventListener("click", function() {
        alert("Correct!")
        countdownTime = countdownTime + 10;
        questionThree.classList.add("hide")
        answerFour.classList.add("hide")
        questionFour()
    });
    }
};

// question 4
var questionFour;
function questionFour() {
    var questionFour = document.createElement('ul');
    questionFour.id = "question-four";
    document.body.appendChild(questionFour);
    questionFour.textContent = "4. What is the correct syntax for referring to an external script called 'title.js'?"
    var answerOne = document.createElement('li');
    questionFour.appendChild(answerOne)
    answerOne.textContent = "A:  <script src='title.js'>"
    answerOne.addEventListener("click", function() {
        alert("Correct!")
        countdownTime = countdownTime + 10;
        questionFour.classList.add("hide")
        answerOne.classList.add("hide")
        questionFive()
    });
    var answerTwo = document.createElement('li'); {
    questionFour.appendChild(answerTwo);
    answerTwo.textContent = "B:  <script name='title.js'>"
    answerTwo.addEventListener("click", function() {
        alert("Wrong!")
        if (countdownTime - 10 > 0) {
            countdownTime = countdownTime - 10;
          } else {
            countdownTime = 0;
          }
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
        if (countdownTime - 10 > 0) {
            countdownTime = countdownTime - 10;
          } else {
            countdownTime = 0;
          }
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
        if (countdownTime - 10 > 0) {
            countdownTime = countdownTime - 10;
          } else {
            countdownTime = 0;
          }
        questionFour.classList.add("hide")
        answerFour.classList.add("hide")
        questionFive()
    });
    }
};

// question 5
var questionFive;
function questionFive() {
    var questionFive = document.createElement('ul');
    questionFive.id = "question-five";
    document.body.appendChild(questionFive);
    questionFive.textContent = "5. What is the correct way to write a JavaScript array?"
    var answerOne = document.createElement('li');
    questionFive.appendChild(answerOne)
    answerOne.textContent = "A:  var fruits = 'apple', 'orange', 'grape'"
    answerOne.addEventListener("click", function() {
        alert("Wrong!")
        if (countdownTime - 10 > 0) {
            countdownTime = countdownTime - 10;
          } else {
            countdownTime = 0;
          }
        questionFive.classList.add("hide")
        answerOne.classList.add("hide")
        timer.classList.add("hide");
        localStorage.setItem("score", countdownTime);
        endQuiz();
    });
    var answerTwo = document.createElement('li'); {
    questionFive.appendChild(answerTwo);
    answerTwo.textContent = "B:  var fruits = ['apple', 'orange', 'grape']"
    answerTwo.addEventListener("click", function() {
        alert("Correct!")
        countdownTime = countdownTime + 10;
        questionFive.classList.add("hide")
        answerTwo.classList.add("hide")
        timer.classList.add("hide");
        localStorage.setItem("score", countdownTime);
        endQuiz();
    });
    }
    var answerThree = document.createElement('li'); {
    questionFive.appendChild(answerThree)
    answerThree.textContent = "C:  var fruits = (1='apple', 2='orange', 3='grape')"
    answerThree.addEventListener("click", function() {
        alert("Wrong!")
        if (countdownTime - 10 > 0) {
            countdownTime = countdownTime - 10;
          } else {
            countdownTime = 0;
          }
        questionFive.classList.add("hide")
        answerThree.classList.add("hide")
        timer.classList.add("hide");
        localStorage.setItem("score", countdownTime);
        endQuiz();
    });
    }
    var answerFour = document.createElement('li'); {
    questionFive.appendChild(answerFour)
    answerFour.textContent = "D:  var fruits = 1=('apple'), 2=('orange'), 3=('grape')"
    answerFour.addEventListener("click", function() {
        alert("Wrong!")
        if (countdownTime - 10 > 0) {
            countdownTime = countdownTime - 10;
          } else {
            countdownTime = 0;
          }
        questionFive.classList.add("hide")
        answerFour.classList.add("hide")
        timer.classList.add("hide");
        localStorage.setItem("score", countdownTime);
        endQuiz();
    });
    }
};

// hide questions if timer reaches '0' before player answers all questions
function hideQuestions() {
    var ulEl = document.getElementById("question-one");
    if (ulEl) {
        ulEl.classList.add("hide");
    };

    var ulElTwo = document.getElementById("question-two");
    if (ulElTwo) {
    ulElTwo.classList.add("hide");
    };

    var ulElThree = document.getElementById("question-three");
    if (ulElThree) {
    ulElThree.classList.add("hide");
    };

    var ulElFour = document.getElementById("question-four");
    if (ulElFour) {
    ulElFour.classList.add("hide");
    };

    var ulElFive = document.getElementById("question-five");
    if (ulElFive) {
    ulElFive.classList.add("hide");
    };
};

// if the player has a score higher than '0', they can enter their initials and save their score
function endQuiz() {

    hideQuestions();
    highScoresArray.push(countdownTime);
    localStorage.setItem("score", JSON.stringify(highScoresArray));

    // create player score message
    var yourHighScore = document.createElement("h1");
    var score = localStorage.getItem("score");
    yourHighScore.textContent = "Your score: " + countdownTime;
    yourHighScore.id = "high-score";
    yourHighScore.className = "your-high-score";
    document.body.appendChild(yourHighScore);

    // create enter initials instructions
    var initialsInstructions = document.createElement("h3");
    initialsInstructions.textContent = "Please enter your initials below:";
    initialsInstructions.id = "initials";
    initialsInstructions.className = "initials-instructions";
    document.body.appendChild(initialsInstructions);

    // create input for player to enter initials
    var initialsInputContainer = document.createElement("div");
    initialsInputContainer.id = "initials-container";
    initialsInputContainer.className = "initials-input-container";
    document.body.appendChild(initialsInputContainer);

    var initialsInput = document.createElement("input");
    initialsInput.id = "input";
    initialsInput.className = "initials-input";
    initialsInputContainer.appendChild(initialsInput);
    document.getElementById("input").setAttribute('maxlength',2);

    // create 'Submit' button container
    var submitButtonContainer = document.createElement("div");
    submitButtonContainer.className = "submit-button-container";
    submitButtonContainer.id = "submit-container";
    document.body.appendChild(submitButtonContainer);
    
    // create 'Submit' button
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
        var userInitials = document.getElementById("input").value;
        userInitialsArray.push(userInitials);
        localStorage.setItem("userInitials", JSON.stringify(userInitialsArray));
        highScoresList();
    });
    clearInterval(interval);
};

// if player scores '0', they will be taken directly to the high scores page and not asked for their initials
function highScoresList() {

    timer.classList.add("hide");

    // create 'High Scores' header
    var highScoresList = document.createElement("ul");
    highScoresList.textContent = "HIGH SCORES";
    highScoresList.className = "high-scores";
    highScoresList.id = "scores";
    document.body.appendChild(highScoresList);

    // list of recent high scores
    for (var i = 0; i < highScoresArray.length; i++) {
        var listItem = document.createElement("li");
        listItem.className = "list-item";
        listItem.textContent = userInitialsArray[i] + ": " + highScoresArray[i];
        highScoresList.appendChild(listItem);
        };

    var initialsAndScoreContainer = document.createElement("div");
    initialsAndScoreContainer.id = "initials-score-container"
    highScoresList.appendChild(initialsAndScoreContainer);
    
    // create 'Play Again' button.  Allows player to start quiz over again to improve their score.
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
        document.location.reload();
    });
    
    // create 'Clear High Scores' button
    var clearHighScoresContainer = document.createElement("div");
    clearHighScoresContainer.className = "clear-scores-button-container";
    clearHighScoresContainer.id = "clear-scores-container";
    document.body.appendChild(clearHighScoresContainer);

    var clearHighScoresButton = document.createElement("button");
    clearHighScoresButton.textContent = "CLEAR HIGH SCORES";
    clearHighScoresButton.className = "clear-scores-button";
    clearHighScoresButton.id = "clear-scores";
    clearHighScoresContainer.appendChild(clearHighScoresButton);
    clearHighScoresButton.addEventListener("click", function() {
        listItem.classList.add("hide");
        initialsAndScoreContainer.classList.add("hide");
        localStorage.clear();
    });

    // create "Get Me Outta Here" button.  Redirects player to Google.
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
};