// check out http://www.w3schools.com/js/js_dates.asp

var d = new Date();

var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
solarsystem = [
  {day:"Sunday" , foreground:"<img src='images/sun.png' />", background:"<img src='images/a.png' />"},
  {day:"Monday" , foreground:"<img src='images/moon.png' />", background:"<img src='images/a.png' />"},
  {day:"Tuesday" , foreground:"<img src='images/mars.png' />", background:"<img src='images/c.png' />"},
  {day:"Wednesday" , foreground:"<img src='images/mercury.png' />", background:"<img src='images/a.png' />"},
  {day:"Thursday" , foreground:"<img src='images/jupiter.png' />", background:"<img src='images/g.png' />"},
  {day:"Friday" , foreground:"<img src='images/venus.png' />", background:"<img src='images/f.png' />"},
  {day:"Saturday" , foreground:"<img src='images/saturn2.png' />", background:"<img src='images/b.png'/>"},
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
}, 1000);


document.getElementById("today").innerHTML = n + ", " + " " + m + " " + d.getFullYear();

function getStylesheet() {
  var currentDay = new Date().getDay();
  var background = document.getElementById('dayL');  
  var foreground = document.getElementById('dayM');  
  
  /*trouble shooter finds you should style towards class since week 4 */


  var names = " ";
  for(var i=0; i<day.length; i++) {

    document.getElementsByClassName("changeD")[i].onmouseover = function() 
{
    this.style.color = "red";
    console.log(names);
     console.log((this).name);
var camp = (this).name

  if (currentDay === 0 || camp === "0") {//sunday
    background.innerHTML = "<img src='images/a.png' />";
    foreground.innerHTML = "<img src='images/sun.png' />";
  }
  else{
    currentDay = camp;
  }

  if (currentDay === 1 || camp === "1") {//monday
    background.innerHTML = "<img src='images/a.png' />";
    foreground.innerHTML = "<img src='images/moon.png' />";

  }
  else{
    currentDay = camp;
  }

  if (currentDay === 2 || camp === "2") {//tuesday
    background.innerHTML = "<img src='images/c.png' />";
    foreground.innerHTML = "<img src='images/mars.png' />";
  }
  else{
    currentDay = camp;
  }

  if (currentDay === 3 || camp === "3") {//wednesday
    background.innerHTML = "<img src='images/a.png' />";
    foreground.innerHTML = "<img src='images/mercury.png' />";
  }
  else{
    currentDay = camp;
  }

  if (currentDay === 4 || camp === "4") {//thursday
    background.innerHTML = "<img src='images/g.png' />";
    foreground.innerHTML = "<img src='images/jupiter.png' />";
  }
  else{
    currentDay = camp;
  }

  if (currentDay === 5 || camp === "5") {//friday
    background.innerHTML = "<img src='images/f.png' />";
    foreground.innerHTML = "<img src='images/venus.png' />";
  }
  else{
    currentDay = camp;
  }

  if (currentDay === 6 || camp === "6") {//saturday
    background.innerHTML = "<img src='images/b.png'/>";
    foreground.innerHTML = "<img src='images/saturn2.png' />";
  }
  else{
    currentDay = camp;
  }
}
 /*   names = day;
    console.log(this.day);
    console.log(names)
 document.getElementsByClassName("changeD")[i].onmouseover = function() 
{
    this.style.color = "red";
    var camp = (this).name
    console.log((this).name);
      console.log(camp)
      for (let g = 0; g < solarsystem.length; g++) {

      if (currentDay = solarsystem[g].day & (this).name) {
      background.innerHTML = solarsystem[g].background;
      console.log(solarsystem[g].background);
      foreground.innerHTML = solarsystem[g].foreground;
      } 
      console.log(solarsystem[g].background);

      }

      if (this.style.color = "red") {
      currentDay = (this).name;
      console.log((this).name);
      } 
      }
*/

document.getElementsByClassName("changeD")[i].onmouseout = function() 
{
this.style.color = "white";
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
  ($("<button>" + element.name + "</button>").attr("href", element.link).addClass("btn btn-outline-primary text-light col-lg-2 change")).appendTo("#links");
  var gallery =   document.getElementById("hidden2");
  gallery.innerHTML='<object type="text/html" data="' + element.link + '" ></object>';
  });

  for (let c = 0; c < githubheroku.length; c++) {
  var Clicked = false;
  $('.change').click(function(){
      Clicked = true;
  });
  $('.change').click(function()
  {
      if (Clicked = true){
       console.log(this.getAttribute("href"));
       for (let d = 0; d < githubheroku.length; d++) {
        console.log(githubheroku[d].link);
        if (githubheroku[d].link = this.getAttribute("href")){
          window.open(this.getAttribute("href"),'_blank');}
        }         
      }
      }); 
    }