// check out http://www.w3schools.com/js/js_dates.asp




  var d = new Date();

  var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log(d.getDay());

console.log(day[d.getDay()]);

console.log(d.getMonth());

var month = [];
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";


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
  amPm = " pm";
}else {
  amPm = " am";
}
console.log(amPm);

  if (hour === 0){
       hour = 12;
    }else if (hour >= 13){
       hour = hour - 12;
    }else if (hour >= 1 && hour <= 9 ) {
        hour = "0" + hour;
}
console.log(hour);


var n = day[d.getDay()];
var m = month[d.getMonth()];
var min = d.getMinutes();
var sec = d.getSeconds();


if (min>=0 && min<=9){
  min ="0" + min;
}else {
  min = min;
}

if (sec>=0 && sec<=9){
    sec ="0" + sec;
  }else {
    sec = sec;
  }

  
document.getElementById("today").innerHTML = n + ", " + " " + m + " " + d.getFullYear();

document.getElementById("time").innerHTML = hour + ":" + min + ":";

document.getElementById("seconds").innerHTML = sec;

document.getElementById("dayNight").innerHTML = amPm;






function getStylesheet() {
  var currentDay = new Date().getDay();
  var weekDayBGL = document.getElementById('dayL');  
  var weekDayBGR = document.getElementById('dayM');  
  
  /*trouble shooter finds you should style towards class since week 4 */
  var names = " ";
  for(var i=0; i<day.length; i++) {
    names = day;
    console.log(day[i]);
    console.log(names[i]);


console.log(names);
console.log(this.name[i]);
console.log(currentDay);

document.getElementsByClassName("changeD")[i].onmouseover = function() 
{
    this.style.color = "red";
    console.log(names);
     console.log((this).name);
var camp = (this).name

  if (currentDay === 0 || camp === "0") {//sunday
    weekDayBGL.innerHTML = "<img src='images/a.png' />";
    weekDayBGR.innerHTML = "<img src='images/sun.png' />";
  }
  else{
    currentDay = camp;
  }

  if (currentDay === 1 || camp === "1") {//monday
    weekDayBGL.innerHTML = "<img src='images/a.png' />";
    weekDayBGR.innerHTML = "<img src='images/moon.png' />";

  }
  else{
    currentDay = camp;
  }

  if (currentDay === 2 || camp === "2") {//tuesday
    weekDayBGL.innerHTML = "<img src='images/c.png' />";
    weekDayBGR.innerHTML = "<img src='images/mars.png' />";
  }
  else{
    currentDay = camp;
  }

  if (currentDay === 3 || camp === "3") {//wednesday
    weekDayBGL.innerHTML = "<img src='images/a.png' />";
    weekDayBGR.innerHTML = "<img src='images/mercury.png' />";
  }
  else{
    currentDay = camp;
  }

  if (currentDay === 4 || camp === "4") {//thursday
    weekDayBGL.innerHTML = "<img src='images/g.png' />";
    weekDayBGR.innerHTML = "<img src='images/jupiter.png' />";
  }
  else{
    currentDay = camp;
  }

  if (currentDay === 5 || camp === "5") {//friday
    weekDayBGL.innerHTML = "<img src='images/f.png' />";
    weekDayBGR.innerHTML = "<img src='images/venus.png' />";
  }
  else{
    currentDay = camp;
  }

  if (currentDay === 6 || camp === "6") {//saturday
    weekDayBGL.innerHTML = "<img src='images/b.png'/>";
    weekDayBGR.innerHTML = "<img src='images/saturn2.png' />";
  }
  else{
    currentDay = camp;
  }
}

document.getElementsByClassName("changeD")[i].onmouseout = function() 
    {
    this.style.color = "white";
    }
};
}

getStylesheet();


/*
$( "li" ).hover(
  function() {
    $( this ).append( $( "<span> ***</span>" ) );
  }, function() {
    $( this ).find( "span:last" ).remove();
  }
);


 
$( "li.fade" ).hover(function() {
  $( this ).fadeOut( 100 );
  $( this ).fadeIn( 500 );
});


*/

function hiding() {
  var x = document.getElementById("hidden");
  var y = document.getElementById("height100");
  if (x.style.display === "none" && y.style.backgroundColor === "blue") {
    x.style.display = "block";
    y.style.backgroundColor = "blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor = "blue";
  }
}

/*
function hiding2() {
  var x =   document.getElementById("hidden2").innerHTML='<object type="text/html" data="../unit-4-game/index.html" ></object>';
  if (x) {
    console.log("huh");
  } else {
    return;
  }
}


function hiding3() {
  var x = document.getElementById("hidden3");
  if (x.style.display === "none") {
    x.style.display = "block";
    
  } else {
    x.style.display = "none";
  }
}

*/