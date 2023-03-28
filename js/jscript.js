jQuery(window).scroll(function(){
    var sticky = jQuery('body'),
        scroll = jQuery(window).scrollTop(); 
    if (scroll > 5) sticky.addClass('body-ns');
    else sticky.removeClass('body-ns');
  });
  
 function openservice1(){
window.location.href='service1.html'
document.getElementById('service2').style.display="none";
  }