
window.addEventListener("scroll",function() {
  let links =  document.querySelectorAll(".navigation a");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector(".navigation").style.backgroundColor = "rgba(70, 123, 91, 1)";
       
        links.forEach(function (item) {

          item.style.marginRight = "18px";
          item.style.paddingTop = "12px"
          
      });
       
       
      } else {
             
        document.querySelector(".navigation").style.backgroundColor = "";


        links.forEach(function (item) {

          item.style.marginRight = "13px";
          item.style.paddingTop = "4px"
          
      });

        
      }


});



window.addEventListener("scroll",function() {
  let links =  document.querySelectorAll(".navigation a");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
       
          
      
       
       
      } else {
             
       
      

        
      }


});
