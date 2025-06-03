// init controller
var controller = new ScrollMagic.Controller();

// var scene = new ScrollMagic.Scene({
// 	triggerElement: "#trigger1",
// 	// triggerHook: 0.9,
// 	offset: 50, // move trigger to center of element
// 	reverse: false // only do once
// })
//     .setClassToggle("#t1i1", "visible") // add class toggle
// 	.addIndicators() // add indicators (requires plugin)
// 	.addTo(controller);

// new ScrollMagic.Scene({
// 	triggerElement: "#trigger2",
// 	// triggerHook: 0.9,
// 	offset: 50, // move trigger to center of element
// 	reverse: false // only do once
// })
//     .setClassToggle("#t1i2", "visible") // add class toggle
// 	.addIndicators() // add indicators (requires plugin)
// 	.addTo(controller);

// https://scrollmagic.io/examples/basic/reveal_on_scroll.html
var revealElements = document.getElementsByClassName("infowrapper");
	for (var i=0; i<revealElements.length; i++) { // create a scene for each element
		new ScrollMagic.Scene({
            triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
	        offset: 50,										// start a little later
			triggerHook: 0.9,
	})
	.setClassToggle(revealElements[i], "visible") // add class toggle
	.addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
	.addTo(controller);
}