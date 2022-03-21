// variables we need to count time
var sec = 0;
var min = 0;
var hr = 0;
var difficultyTime = 3;

// HTML variables
var dinosaur = document.getElementById("dinosaur");
var block = document.getElementById("block");
var time = document.getElementById("timeAmount");

// Increase seconds by one every 1 second
var theTime = setInterval(timer, 1000);
// We check the status of the game every 10 ms
var check = setInterval(checkGame, 10);
// Makes game harder every 5 seconds
var gameDifficulty = setInterval(change, 5000);

// A function to reload the page
function reloadPage(){
  location.reload();
  var theTime = setInterval(timer, 1000);
}

// A function to count the game time
function timer(){

  // Add s second
  sec = sec + 1;
  
  // Add a minute
  if (sec == 60){
    min = min + 1;
    sec = 0;
  }

  // Add an hour
  if (min == 60){
    hr = hr + 1;
    min = 0;
  }

  if (sec < 10 || sec == 0){
    secNumber = `0${sec}`;
  }
  else{
    secNumber = sec.toString();
  }

  if (min < 10 || min == 0){
    minNumber = `0${min}`;
  }
  else{
    minNumber = min.toString();
  }

  if (hr < 10 || hr == 0){
    hrNumber = `0${hr}`;
  }
  else{
    hrNumber = hr.toString();
  }
  
  timeNumbers = hrNumber + ':' + minNumber + ':' + secNumber;
  time.innerHTML = timeNumbers;
}

// This function makes game harder by decreasing block animation duration, which makes block move faster
function change(){

  // Decrease time by 10 percent
  difficultyTime = difficultyTime - difficultyTime/10; 
  block.style['animation'] = `moveBlock ${difficultyTime}s infinite`;

}


// A function to make our dinosaur move
function jump(){
  

  if (dinosaur.classList != "animate"){
      // Adding jump animation to the dinosaur elemnt
      dinosaur.classList.add("animate");
  }
  
  // Remove the animation from dinosaur
  setTimeout(removeAnimation, 500);
  
}

// A function to remove the animation from dinosaur
function removeAnimation(){
  dinosaur.classList.remove("animate");
}

function checkGame(){
  
  var dinosaurTop = parseInt(window.getComputedStyle(dinosaur).getPropertyValue("top")); 
  var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
 
  // Conditions we have to change, when player loses
  if ( dinosaurTop >= 210 && (blockLeft >= 0 && blockLeft <= 20) ){
    
    // Set the timer to 0
    clearInterval(theTime);
    sec = 0;
    min = 0;
    hr = 0;
    time.innerHTML = "00:00:00";

    // Set difficultyTime to 0
    clearInterval(gameDifficulty);
    difficultyTime = 0;

    // Dissappearing the block
    block.style.animation = "none";
    block.style.display = "none";
    
    alert("You Lost!");
  }
}