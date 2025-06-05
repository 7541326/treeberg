var sound = new Howl({
  src: ['./sounds/sound1.mp3']
});

$("#playsound").click(function(){
    sound.play();
    console.log("playing")
})