var portfolioWeb = [
{ name: "crystal" ,link: "./images/unit-4.png"},
{ name: "trivia" ,link: "./images/Trivia-Game.png"},
{ name: "train" ,link: "./images/train.png"},
{ name: "psychic" ,link: "./images/Psychic-Game.png"},
{ name: "giftastic" ,link: "./images/giftastic-0.png"},
{ name: "portfolio" ,link: "./images/venus.png"}
];

for (let j = 0; j < portfolioWeb.length; j++) {
var img = $('<img class="img-responsive col-lg-2 col-md-2 col-sm-2 col-xs-2">');
img.attr('src', portfolioWeb[j].link);
img.appendTo('#galleryWeb');
}

var portfolioReferences = [
{ name: "California State University East Bay" ,icon: "./images/gdskills/CSUEB.svg"},
{ name: "UC Berkeley Extension" ,icon: "./images/gdskills/logo-berkeley-extension.jpg"},
{ name: "Codecademy" ,icon: "./images/gdskills/Codecademy-banner.png"},
{ name: "" ,icon: "./images/"},
{ name: "" ,icon: "./images/"},
{ name: "" ,icon: "./images/"}
  ];

for (let k = 0; k < portfolioReferences.length; k++) {
  var img2 = $('<img class="img-responsive col-lg-4 col-md-4 col-sm-4 col-xs-4">');
img2.attr('src', portfolioReferences[k].icon);
img2.appendTo('#galleryReferences');
}

var portfolioGd = [
{ name: "graphic design" ,link: "./images/logoBranding.jpg"},
{ name: "conceptual design" ,link: "./images/conceptualDesign.jpg"},
{ name: "storyboarding" ,link: "./images/storyboard.jpg"}
  ];

for (let k = 0; k < portfolioGd.length; k++) {
  var img3 = $('<img class="img-responsive col-lg-4 col-md-4 col-sm-4 col-xs-4">')
img3.attr('src', portfolioGd[k].link);
img3.appendTo('#galleryGd');
}

var skillsWeb = [
{ name: "bootstrap" ,link: "./images/webskills/Boostrap_logo.svg"},
{ name: "html5" ,link: "./images/webskills/HTML5_logo_and_wordmark.svg"},
{ name: "css3" ,link: "./images/webskills/CSS3_logo_and_wordmark.svg"},
{ name: "javascript" ,link: "./images/webskills/Unofficial_JavaScript_logo_2.svg"},
{ name: "jquery" ,link: "./images/webskills/Logo_jQuery.svg"},
{ name: "react" ,link: "./images/webskills/React-icon.svg"},
{ name: "gitbash" ,link: "./images/webskills/Git-logo.svg"},
{ name: "github" ,link: "./images/webskills/Github.com-SunghanKim.png"},
{ name: "node.js" ,link: "./images/webskills/Node.js_logo.svg"},
{ name: "heroku" ,link: "./images/webskills/Logo_di_Heroku.png"},
{ name: "mysql" ,link: "./images/webskills/Database-mysql.svg"},
{ name: "json" ,link: "./images/webskills/JSON_vector_logo.svg"}
  ];

for (let w = 0; w < skillsWeb.length; w++) {
var img4 = $('<img class="img-responsive col-lg-2 col-md-2 col-sm-2">');
img4.attr('src', skillsWeb[w].link);
img4.hover(
function () {
  $('#first').text(skillsWeb[w].name);
  });
img4.appendTo('#galleryskillsWeb');
}

var contactLinks = [
{ name: "facebook", link: "https://www.facebook.com/jeston.sanders", icon: "./images/webskills/Facebook_icon.svg", picture: "./images/facebook.jpg"},
{ name: "gmail", link: "mailto:jestonls@gmail.com", icon: "./images/webskills/Gmail_Icon.svg", picture: "./images/webskills/Gmail_Icon.svg"},
{ name: "linkedIn", link: "https://www.linkedin.com/in/jeston/", icon: "./images/webskills/Linkedin_icon.svg", picture: "./images/linkedin.jpg"},
{ name: "phone", link: "https://www.linkedin.com/in/jeston/", icon: "./images/Telephone_icon_blue_gradient.svg", picture: "./images/message.png"}
  ];
  
  contactLinks.forEach(element => {
  console.log(element.name);
var imgContactLinks = $("<img>").attr("src", element.icon).addClass("col-lg-4 col-md-4 col-sm-4 col-xs-6").appendTo("#links2").wrap($("<a target='_blank'>").attr("href", element.link));

imgContactLinks.hover(
function () {
  $('#second').text(element.name);
  $('#secondImg').html($("<img>").attr("src", element.picture).addClass("col-lg-12 col-md-12 col-sm-12 col-xs-12"));
  });
 });

    $(window).scroll(function() {
if ($(this).scrollTop() > 200) {
  $("#appearing").css({
    "position":"fixed",
    "top":"0%",
    "z-index":"7"
  });
  $("#appearing2").css({
    "display":"none",
  });

} else {
$("#appearing").css({
  "position":"relative",
    "top":"0%"
});
$("#appearing2").css({
  "display":"block",
});
	}
    });