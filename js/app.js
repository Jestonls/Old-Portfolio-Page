// check out http://www.w3schools.com/js/js_dates.asp

var d = new Date();

var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
solarsystem = [
  {day:"0" , foreground:"<img src='images/sun.png' />", background:"<img src='images/a.png' />"},
  {day:"1" , foreground:"<img src='images/moon.png' />", background:"<img src='images/a.png' />"},
  {day:"2" , foreground:"<img src='images/mars.png' />", background:"<img src='images/c.png' />"},
  {day:"3" , foreground:"<img src='images/mercury.png' />", background:"<img src='images/a.png' />"},
  {day:"4" , foreground:"<img src='images/jupiter.png' />", background:"<img src='images/g.png' />"},
  {day:"5" , foreground:"<img src='images/venus.png' />", background:"<img src='images/f.png' />"},
  {day:"6" , foreground:"<img src='images/saturn2.png' />", background:"<img src='images/b.png'/>"},
];

console.log(day[d.getDay()]);

var month = ["January","February","March","April","May","June","July","August","September","October","November","December"]

console.log(d.getHours());

console.log(month[d.getMonth()]);
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.toLocaleDateString());

//change default 24 hour time form to 12 hour time
var hour = (d.getHours());

console.log(hour);

var amPm = " ";
if (hour >= 11){
  amPm = " pm";}
else {
  amPm = " am";}
if (hour === 0){
  hour = 12;}
else if (hour >= 13){
  hour = hour - 12;}

console.log(hour);


var n = day[d.getDay()];
var m = month[d.getMonth()];
console.log(month[d.getMonth()]);

var min = d.getMinutes();
var sec = d.getSeconds();

var countdown = setInterval(function() {
  sec++;
  document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec + amPm;
  if (sec > 59) 
    sec = 0,
    min ++;
    setInterval(countdown);
  if (sec < 10)
  document.getElementById("time").innerHTML = hour + ":" + min + ":" + "0" + sec + amPm;
  if ( min < 10)
  document.getElementById("time").innerHTML = hour + ":" + "0" + min + ":" + sec + amPm;
  if (min > 59) 
    min = 0;

}
, 1000);


document.getElementById("today").innerHTML = n + ", " + " " + m + " " + d.getDate() + " " + d.getFullYear();

function getStylesheet() {
  var currentDay = new Date().getDay();
  var background = document.getElementById('dayL');  
  var foreground = document.getElementById('dayM');  
  console.log(currentDay);
  console.log(solarsystem["0"].day);
  var names = " ";
  for(var i=0; i<day.length; i++) {
    document.getElementsByClassName("changeD")[i].onmouseover = function() {
    this.style.color = "red";
  
  for (let f = 0; f < solarsystem.length; f++) {   
  if (this.name === solarsystem[f].day) {
    background.innerHTML = solarsystem[f].background;
    foreground.innerHTML = solarsystem[f].foreground;

  }
  }
}

document.getElementsByClassName("changeD")[i].onmouseout = function() 
{
this.style.color = "white";  
console.log('work');
  background.innerHTML = solarsystem[currentDay].background;
  foreground.innerHTML = solarsystem[currentDay].foreground;
}
};
}

getStylesheet();

function hiding() {
  var x = document.getElementById("hidden");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

var githubheroku = [
  { name: "Bootstrap Portfolio" ,link: "https://jestonls.github.io/Bootstrap-Portfolio/"},
  { name: "Updated Portfolio" ,link: "https://jestonls.github.io/Updated-Portfolio-Page/"},
  { name: "Psychic Game" ,link: "https://jestonls.github.io/Psychic-Game/"},
  { name: "Crystal Game" ,link: "https://jestonls.github.io/unit-4-game/"},
  { name: "Trivia Quiz" ,link: "https://jestonls.github.io/TriviaGame/"},
  { name: "Giphy App" ,link: "https://jestonls.github.io/Giftastic/"},
  { name: "Train Scheduler" ,link: "https://jestonls.github.io/Train/"},
  { name: "Burger Logger" ,link: "https://pure-peak-26700.herokuapp.com/"},
  { name: "Liri Inquirer" ,link: "https://github.com/Jestonls/Liribot/"},
  { name: "Bamazon" ,link: "https://jestonls.github.io/bamazon/"},
  { name: "Friend Finder App" ,link: "https://ancient-waters-96999.herokuapp.com/"},
  { name: "Group Project 2" ,link: "https://calm-lake-59280.herokuapp.com/"}
  ]

githubheroku.forEach(element => {
  console.log(element.name);
  ($("<button target='_blank'>" + element.name + "</button>").attr("href", element.link).addClass("btn btn-outline-primary text-light col-lg-2 col-md-2 change")).appendTo("#links");
  var gallery =   document.getElementById("hidden2");
  // gallery.innerHTML='<object type="text/html" data="' + element.link + '" ></object>';
  });

  githubheroku.forEach(element => {
    console.log(element.name);
    // gallery.innerHTML='<object type="text/html" data="' + element.link + '" ></object>';
  });

var Clicked = false;
$('.change').click(function(){
Clicked = true;
});   

$('.change').click(function()
{
if (Clicked = true){
window.open(this.getAttribute("href"),'_blank');
}
});

    function hiding2() {
      var z =   document.getElementById("hidden2");
      z.innerHTML='<object type="text/html" data="../../Portfolio/blackhound/circuit.html" ></object>';
      if (z.style.display === "none") {
        z.style.display = "block";
        console.log("Mmhmm");
      } else {
        z.style.display = "none";
      }
    }