
window.addEventListener("scroll",function() {
  let links =  document.querySelectorAll(".navigation a");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector(".navigation").style.backgroundColor = "rgb(104 130 114)";
       
        links.forEach(function (item) {

          item.style.marginRight = "18px";
          item.style.paddingTop = "7px"
       
      });
       
       
      } else {
             
        document.querySelector(".navigation").style.backgroundColor = "";


        links.forEach(function (item) {

          item.style.marginRight = "13px";
          item.style.paddingTop = "3px"
          
      });

        
      }


});



window.addEventListener("scroll",function() {
  let links =  document.querySelectorAll(".navigation a");

    if (document.body.scrollTop > 620 &&  document.body.scrollTop < 1550 || document.documentElement.scrollTop > 620 && document.documentElement.scrollTop < 1550 ) {
               
      document.querySelector(".bar .html1").style.width="88%";
      document.querySelector(".bar .css").style.width="85%";
      document.querySelector(".bar .sass").style.width="84%";
      document.querySelector(".bar .js").style.width="35%";
      document.querySelector(".bar .bootstrap").style.width="60%";
       
       
      } else {
                        
       document.querySelector(".bar .html1").style.width="0%";
       document.querySelector(".bar .css").style.width="0%";
      document.querySelector(".bar .sass").style.width="0%";
      document.querySelector(".bar .js").style.width="0%";
      document.querySelector(".bar .bootstrap").style.width="0%";

        
      }


});
