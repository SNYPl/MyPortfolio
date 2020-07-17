


window.addEventListener("scroll",function() {


    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector(".navigation").style.backgroundColor = "#4dc47d";
        document.querySelector(".navigation a").style.marginBottom = "30px";
      } else {
        document.querySelector(".navigation").style.backgroundColor = "";
      }

console.log("true");



});