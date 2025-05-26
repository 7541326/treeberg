// script.js - treeberg functionality
// may 2025

// first button
const $tierItems = $(".infowrapper")

$("#expandtree").click(function(){
    $("#treecontainer").slideDown(1000);
    $(".slugstick").delay(1000).slideDown(1000);
    $tierItems.delay(1500).fadeIn(1000);

});


// show or hide info when clicking tier item
$tierItems.click(function(){
    if ($(this).children(".infounwrap").css("display") == "none") {
        $(this).children(".infounwrap").slideDown();
    } else {
        $(this).children(".infounwrap").slideUp();
    }
});