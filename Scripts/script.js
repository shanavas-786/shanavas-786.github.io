$(document).ready(function () {
   $(window).scroll(function () {
       if ($(this).scrollTop() > 200) {
           $('.scrollup').fadeIn();
       } else {
           $('.scrollup').fadeOut();
       }
   });
   $('.scrollup').click(function () {
       $("html, body").animate({
           scrollTop: 0
       }, 800);
       return false;
   });
});


function myFunction() {
    var x = document.getElementById("myLinks");
    var y = document.getElementById("brs");
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.color = "#000000";     
    } else {
      x.style.display = "block";
      y.style.color = "#02c8a7";
    }
  }

  