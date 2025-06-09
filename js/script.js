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

    currentQ = 0;
    score = 0;
    randomizedQs = shuffle([...quizQs]).slice(0, maxQuizQuestions); 
    quizStart(currentQ);

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
    
    //hides feedback banner 
     $("#quizFeedback").hide();

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




//randomizing quiz questions
// Needs to happen first before any of the other quiz elements
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1)); // random index
        [array[i], array[j]] = [array[j], array[i]]; //swap elements
    }
    return array;
}

let randomizedQs = [];


//start of implementing our quiz questions
let quizQs = [
    // please remember that the index starts with "0", not "1"
  {
    question: "What is the official mascot of UC Santa Cruz?",
    answers: [
        "Sea Otter",
        "Banana Slug",
        "Grizzly Bear",
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
  {
    question: "What kind of trees surround the UCSC campus?",
    answers: [
        "Birch Trees",
        "Redwood Trees",
        "Mexican Plum Trees",
        "Oak Trees"
    ],
    correct: 1 //index for redwood trees
  },
  {
    question: "How many residential colleges are there?",
    answers: [
        "1",
        "2235",
        "69",
        "10"
    ],
    correct: 3 //index for 10
  },
  {
    question: "UCSC has a Coastal Campus. What subjects are taught there?",
    answers:[
        "Surfing",
        "Water Related Kinesciology Classes",
        "Coastal Conservation, Marine Biology, Ecology, Habitat Restoration, and Environmental Policy",
        "Chemistry, Biology, Ecology, Geology"
    ],
    correct: 2 //index for the third answer
  },
  {
    question: "What animals can be found around the UCSC campus?",
    answers:[
        "Foxes, Wolves, Deer, Squirrels",
        "Mountain Lions, Ghosts, Elephants, Raccoons",
        "Deer, Cows, Rabid Students",
        "Turkey, Deer, Coyote, Racoons"
    ],
    correct: 3 //index for the last option
  },
  {
    question:"Which statement is true?",
    answers: [
        "According to the California Database of UC Happiness, UC Santa Cruz has the lowest happiness ratings of them all.",
        "Santa Cruz has one of the least afforadable rental markets in the nation.",
        "The percentage of white people that attend UCSC is about 87%.",
        "EVERYONE (yes including you too), love love LOVESSS TAPS.",
    ],
    correct: 1//index for the 2nd answer

  },
  {
    question:"Who is Samantha?",
    answers: [
        "The name of a tree on campus",
        "Sammy the Slug alter-ego",
        "A goat on campus",
        "Sammy the Slug government name",
    ],
    correct: 1 //index for the 2nd answer 
  },
  {
    question:"Where was the Sammy shrine located?",
    answers: [
        
        "Stevenson Dorms",
        "Quarry Amphitheater",
        "Oakes Library",
        "Porter Dorms",
    ],
    correct: 3//index for last option 
  }
]

//--------------------------------------------------------------
let currentQ = 0;
let score = 0;

const maxQuizQuestions = 10;

function quizStart(num) {
    $("#quizQ").html(`${randomizedQs[num].question}`);
    $("#quizA").html(``);

    for (let i in randomizedQs[num].answers) {
        $("#quizA").append(`
            <input type="radio" name="quiz" value="${i}" id="quizA${i}" class="quiz-radio">
            <label for="quizA${i}" class="quiz-label"><p>${randomizedQs[num].answers[i]}</p></label>
        `);
    }

    $("#quizSubmit").css("display", "block");
}

function quizCheck(num) {
    let selectedA = $('input[name="quiz"]:checked').val();
    let correctA = randomizedQs[num].correct;

    $(".quiz-radio").prop("disabled", true);
    $("#quizSubmit").hide();  // Hide submit

    let message = "";
    if (selectedA == correctA) {
        score++;
        message = "✅ Correct!";
    } else {
        let correctAnswerText = randomizedQs[num].answers[correctA];
        message = `❌ Wrong! Better luck next time!`;
    }

    // Show feedback
    $("#quizFeedbackMsg").html(message);
    $("#quizFeedback").slideDown();

}


function quizNext() {
    console.log("clicked");
    console.log("Score:", score, "Current Q:", currentQ);

    if (currentQ < randomizedQs.length - 1) {
        currentQ++;
        quizStart(currentQ);
    } else {
        $("#quizResults").html(`Your score is: ${score}`);
        $("#quizQ").slideUp();
        $("#quizA").slideUp();
        $("#quizSubmit").slideUp();
        $("#quizResults").slideDown();
        $("#quizExit").slideDown();
    }
}



// ---------------------------------------------