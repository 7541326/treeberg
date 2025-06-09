// script.js - treeberg functionality
// may 2025

// sound var
var sound = new Howl({
  src: ['./sounds/forest-ambience-26617.mp3'],
  loop: true,
  volume: 0.5,
});


// --------------------------------------------
// start of buttons scrolling to bottom and top

const scrollBottom = document.getElementById("scroll-to-bottom");

scrollBottom.addEventListener('click', () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    })
})

//end of scrolling buttons



// variables
const $tierItems = $(".infowrapper")
const quizQs = [
    // please remember that the index starts with "0", not "1"
  {
    question: "What is the official mascot of UC Santa Cruz?",
    answers: [
        "Sea Otter",
        "Banana Slug",
        "Grizly Bear",
        "Frog"
    ],
    correct: 1 // index for banana slug
  },
  {
    question: "Which Cafe can you get a free meal?",
    answers: [
        "Oakes Cafe",
        "Cowell Cafe",
        "Global Village Cafe",
        "Stevenson Cafe"
    ],
    correct: 1 // index for cowell cafe
  },
  {
    question: "What is the theme for Cowell College?",
    answers: [
        "Communicating Diversity for a just Society",
        "The Pursuit of Truth in the Company of Friends",
        "Power and Representation",
        "How am I supposed to know?"
    ],
    correct: 1 // index for pursuit of truth
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
    console.log("clicked");
    console.log(score, currentQ);
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
// ---------------------------------------------
// buttons
$("#bannerStart").click(function () {
    console.log("clicked");
    $("#abovetree").slideUp();
    $("#treecontainer").slideDown(1000);
    $(".slugstick").delay(1000).slideDown(1000);
    $tierItems.delay(1500).fadeIn(1000);

  // load particles
    particlesJS.load('particles-js', 'experiments/particle/js/particles.json', function() {
    console.log('callback - particles.js config loaded');});

    // play sound
    sound.play();
    console.log("playing");
});


$("#quizExpand").click(function() {
    console.log("quiz time!");
    console.log(score, currentQ);
    $("#treecontainer").slideUp();
    $("#quiz").delay(1000).slideDown();
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
    // reshow quiz divs 
    $("#quizQ").delay(2000).slideDown();
    $("#quizA").delay(2000).slideDown();
    $("#quizSubmit").delay(2000).slideDown();
    $("#quizResults").delay(2000).slideUp();
    $("#quizExit").delay(2000).slideUp();
    currentQ = 0;
    score = 0;
    console.log(score, currentQ);

});

// show or hide info when clicking tier item
$tierItems.click(function () {
    if ($(this).children(".infounwrap").css("display") == "none") {
        $(this).children(".infounwrap").slideDown();
    } else {
        $(this).children(".infounwrap").slideUp();
    }
});

// -------------------------------------------

// scrolling
// init controller
var controller = new ScrollMagic.Controller();

// adding the things
// https://scrollmagic.io/examples/basic/reveal_on_scroll.html
var revealElements = document.getElementsByClassName("infowrapper");
	for (var i=0; i<revealElements.length; i++) { // create a scene for each element
		new ScrollMagic.Scene({
            triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
	        offset: 50,										// start a little later
			triggerHook: 0.9,
	})
	.setClassToggle(revealElements[i], "visible") // add class toggle
	// .addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
	.addTo(controller);
}