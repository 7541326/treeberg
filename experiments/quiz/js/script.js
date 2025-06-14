// script.js - treeberg functionality
// may 2025

// variables
const $tierItems = $(".infowrapper")
const quizQs = [
  {
    question: "What is the official mascot of UC Santa Cruz?",
    answers: [
        "Sea Otter",
        "Banana Slug",
        "Grizly Bear",
        "Frog"
    ],
    correct: 2 // Fixed index
  },
  {
    question: "Which Cafe can you get a free meal?",
    answers: [
        "Oakes Cafe",
        "Cowell Cafe",
        "Global Village Cafe",
        "Stevenson Cafe"
    ],
    correct: 2
  },
  {
    question: "What is the theme for Cowell College?",
    answers: [
        "Communicating Diversity for a just Society",
        "The Pursuit of Truth in the Company of Friends",
        "Power and Representation",
        "How am I supposed to know?"
    ],
    correct: 2 // Fixed index
  },
]
let currentQ = 0;
let score = 0;

// functions
function quizStart(num) {
    // prints currentQ of quizQs to relevant divs
    $("#quizQ").html(`${quizQs[num].question}`);
    $("#quizA").html(``);
    for (let i in quizQs[num].answers) {
        $("#quizA").append(`
            <input type="radio" name="quiz" value="${i}" id="quizA${i}">
            <label for="quizA${i}" class="quizALabel"><p>${quizQs[num].answers[i]}</p></label>
        `);
    }
    $("#quizSubmit").css("display", "inline");
}

function quizCheck(num) {
    let selectedA = $('input[name="quiz"]:checked').val();
    console.log(selectedA);
    if (selectedA == quizQs[num].correct) {
        score++;
    }
}

function quizNext() {
    console.log("clicked")
    if (currentQ < quizQs.length - 1) {
        currentQ++;
        quizStart(currentQ);
    } else {
        $("#quizResults").html(`Your score is: ${score}`);
        console.log("slided");
        $("#quizQ").slideUp();
        $("#quizA").slideUp();
        $("#quizSubmit").slideUp();
        $("#quizResults").slideDown();
        $("#quizExit").slideDown();
    }
}

// buttons
$("#bannerStart").click(function () {
    console.log("clicked");
    $("#abovetree").slideUp();
});

$("#quizExpand").click(function() {
    console.log("quiz time!")
    $("#treecontainer").slideUp(1000);
    $("#quiz").delay(1000).slideDown(1000);
    quizStart(currentQ);
})

$("#quizSubmit").click(function () {
    if (!$('input[name="quiz"]:checked').val()) {
        alert("Please select an answer!");
        return;
    }
    quizCheck(currentQ);
    quizNext();
});

$("#quizExit").click(function () {
    $("#quiz").slideUp(1000);
    $("#treecontainer").slideDown(1000);
    $(".slugstick").delay(1000).slideDown(1000);
    $tierItems.delay(1500).fadeIn(1000);
});

// show or hide info when clicking tier item
$tierItems.click(function () {
    if ($(this).children(".infounwrap").css("display") == "none") {
        $(this).children(".infounwrap").slideDown();
    } else {
        $(this).children(".infounwrap").slideUp();
    }
});

// particles
particlesJS.load('particles-js', '../particle/js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});
