// script.js - treeberg functionality
// may 2025

// variables
const $tierItems = $(".infowrapper")
const quizQs = [
  {
    question: "Example Question one?",
    answers: [
        "Answer1",
        "Answer2",
        "Answer3",
        "Answer4"
    ],
    correct: 2
  },
  {
    question: "Example Question two?",
    answers: [
        "Answer1",
        "Answer2",
        "Answer3",
        "Answer4"
    ],
    correct: 2
  },
  {
    question: "Example Question three?",
    answers: [
        "Answer1",
        "Answer2",
        "Answer3",
        "Answer4"
    ],
    correct: 2
  },
]
let currentQ = 0;
let score = 0;


// functions
// quiz function sort of adapted from https://code-boxx.com/simple-javascript-quiz/ 
function quizStart(num) {
    // prints currentQ of quizQs to relevant divs
    $("#quizQ").html(`${quizQs[num].question}`);
    $("#quizA").html(``);
    for (i in quizQs[num].answers) {
        $("#quizA").append(`
            <input type="radio" name="quiz" value="${i}" id="quizA${i}">
            <label for="quizA${i}">${quizQs[num].answers[i]}</label>
            `);}
    $("#quizSubmit").css("display", "block")
    
}

function quizCheck(num) {
    // gets value of selected radio button, checks against correct answer
    let selectedA = $('input[name="quiz"]:checked').val();
    console.log(selectedA);
    if (selectedA == quizQs[num].correct){
        score ++;
    };
}

function quizNext() {
    console.log("clicked")
    // if still questions, go to next question, or else close quiz and show results
    if (currentQ < quizQs.length-1) {
        currentQ++;
        quizStart(currentQ);
        // function to check answer, add to score
    } else {
        $("#quizResults").html(`
            Your score is: ${score}`)
        console.log("slided")
        $("#quizQ").slideUp();
        $("#quizA").slideUp();
        $("#quizSubmit").slideUp();
        $("#quizResults").slideDown();
        $("#quizExit").slideDown();
    }
}

// buttons
$("#expandtree").click(function(){
    console.log("clicked");
    $("#abovetree").slideUp();
    $("#quiz").delay(1000).slideDown();
    quizStart(currentQ);
});
$("#quizSubmit").click(function(){
    quizCheck(currentQ);
    quizNext();
})
$("#quizExit").click(function(){
    $("#quiz").slideUp(1000);
    $("#treecontainer").slideDown(1000);
    $(".slugstick").delay(1000).slideDown(1000);
    $tierItems.delay(1500).fadeIn(1000);
})

// show or hide info when clicking tier item
$tierItems.click(function(){
    if ($(this).children(".infounwrap").css("display") == "none") {
        $(this).children(".infounwrap").slideDown();
    } else {
        $(this).children(".infounwrap").slideUp();
    }
});

