var dodge = $("#dodge");
var points = $("#Points");
var Count = 0;

//CLICK BALL FUNCTION
dodge.click(function() {
  Sonic();
  scoreSetter();
});

function Sonic() {
  setInterval(function() {
    Move();
  },1000);
};

//MOVEMENT FUNCTION (RUNS RANDOM POSITIONS)
function Move(){
  var movedown = dodge.css("top",randomTB());
  var moveup = dodge.css("up",randomTB());
  var moveleft = dodge.css("left",randomLR());
  var moveright = dodge.css("right",randomLR());
};

//SCORE COUNTER
function scoreSetter() {
  points.text("Score:" + Count);
  Count++;
};


//RANDOM NUMBER GENERATOR (RANDOMIZES POSITIONS).

function randomLR() {
 var number = Math.floor(Math.random()*300);
 return number;
};

function randomTB() {
 var number = Math.floor(Math.random()*600);
 return number;
};
