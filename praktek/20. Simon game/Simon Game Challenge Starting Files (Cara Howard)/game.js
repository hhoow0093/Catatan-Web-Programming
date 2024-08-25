const RandomColors = ["red", "blue", "green", "yellow"];
let GamePattern = [];
let userClickPattern = [];
let level = 0;

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  //console.log(randomNumber);
  let RandomChosenColor = RandomColors[randomNumber];
  GamePattern.push(RandomChosenColor);
  console.log(GamePattern);
  $(`#level-title`).text(`level ${level + 1}`);
  level++;
  $(`#${RandomChosenColor}`).fadeOut(200);
  $(`#${RandomChosenColor}`).fadeIn(200);
  playAudio(RandomChosenColor);
}

function checkAnswer(input) {
  if (GamePattern[input] !== userClickPattern[input]) {
    $("body").css("backgroundColor", "red");
    $(`#level-title`).text(`GameOver! Resetting..`);
    let audio = new Audio("./sounds/wrong.mp3");
    audio.play();
    setTimeout(function () {
      location.reload();
    }, 1500);
  } else {
    if (userClickPattern.length === GamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
      userClickPattern.length = 0;
    }
  }
}

function playAudio(event) {
  let audio = new Audio(`./sounds/${event}.mp3`);
  audio.play();
}

// ini cuman bekerja sekali doang
$(document).one("keydown", function (e) {
  if (e.key === "a" || e.key === "A") {
    nextSequence();
  }
});

// ini bakal bekerja terus apabila user tekan a atau A
// $(document).keydown(function (e) {
//     if(e.keyCode === 65 || 97){
//         nextSequence();
//     }

// });

function animatePress(ChosenColor) {
  $(`#${ChosenColor}`).addClass("pressed");
  setTimeout(function () {
    $(`#${ChosenColor}`).removeClass("pressed");
  }, 50);
}

$(".btn").click(function (e) {
  let UserChosenColor = this.id;
  console.log(UserChosenColor);
  userClickPattern.push(UserChosenColor);
  console.log(userClickPattern);
  // $(`#${UserChosenColor}`).fadeOut(100);
  // $(`#${UserChosenColor}`).fadeIn(100);
  animatePress(UserChosenColor);
  playAudio(UserChosenColor);
  checkAnswer(userClickPattern.length - 1);
});
