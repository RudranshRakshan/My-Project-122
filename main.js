x = 0;
y = 0;

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

screenW = 0;
screenH = 0;

numb = 0;

function preload() {
  apple = loadImage("apple.png");
}
function start() {
  document.getElementById("status").innerHTML = "System is listening please speak";
  recognition.start();
}

recognition.onresult = function (event) {

  console.log(event);

  content = event.results[0][0].transcript;

  document.getElementById("status").innerHTML = "The speech has been recognized: " + content;
  numb = Number(content);
  if (Number.isInteger(numb)) {
    draw_apple = "set"
    document.getElementById("status").innerHTML = "Started drawing apples";
  }
  else {
    document.getElementById("status").innerHTML = "The speech has not been recognized as a number ";
  }
}

function setup() {
  canvas = createCanvas(900, 600);
  canvas.position(350,);
  screenW = window.innerWidth;
  screenH = window.innerHeight;
}

function draw() {
  if (draw_apple == "set") {
    for (let index = 0; index < numb; index++) {
      x = Math.floor(Math.random() * 900);
      y = Math.floor(Math.random() * 600);
      image(apple, x, y, 50, 50);
    }
    document.getElementById("status").innerHTML = numb+ " Apples drawn";
    draw_apple = "";
  }
}

function speak() {
  var synth = window.speechSynthesis;

  var utterThis = new SpeechSynthesisUtterance(speak_data);

  synth.speak(utterThis);

  speak_data = "";
}
