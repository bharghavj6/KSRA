jQuery(window).scroll(function () {
  var sticky = jQuery("body"),
    scroll = jQuery(window).scrollTop();
  if (scroll > 5) sticky.addClass("body-ns");
  else sticky.removeClass("body-ns");
});
//window.location.reload(true);

// For adding padding to carousal section related to header height
$(document).ready(function ($) {
  window.location.href = "#";
  // When the window resizes
  $(window).on("resize scroll", function () {
    // Get the height + padding + border of `#masthead`
    var mastHeight = $(".header-nav").outerHeight();

    // Add the height to `.site-content`
    $("#carousal").css("padding-top", mastHeight);
  });

  // Trigger the function on document load.
  $(window).trigger("resize");
});

//Initialize AOS start
AOS.init();
//Initialize AOS end

//contact us form validation start

//JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener("submit", function (event) {
      form.classList.add("was-validated");
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        //console.log("invalid");
      } else {
        event.preventDefault();
        initiate();
        //console.log("valid");
        const serviceID = "service_ou527t8";
        const templateID = "template_u1rdv2a";

        // send the email here
        emailjs.sendForm(serviceID, templateID, this).then(
          (response) => {
            // console.log("SUCCESS!", response.status, response.text);
            //alert("SUCCESS!");
            //izitoast alert
            iziToast.show({
              //icon: "fa-envelope",
              position: "topCenter",
              iconUrl: "img/mail.png",
              theme: "dark",
              message: "Mail Sent Successfully",
              messageSize: "20",
              closeOnClick: true,
              progressBarColor: "#fff",
              timeout: 2000,
              onClosed: function () {
                window.location.reload();
              },
            });
            //document.getElementById("myForm").reset();

            //window.location.reload();
            //window.location.href = "#";
          },
          (error) => {
            console.log("FAILED...", error);
            alert("FAILED...", error);
          }
        );
      }
    });
  });
})();
//contact us form validation end

//email service start
function initiate() {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("GLWMYwz_kvwA8D6hG");
  //emailjs.init("");
}

// listen to the form submission
// document.getElementById("myForm").addEventListener("submit", function (event) {
//   event.preventDefault();

//   const serviceID = "service_ou527t8";
//   const templateID = "template_u1rdv2a";

//   // send the email here
//   emailjs.sendForm(serviceID, templateID, this).then(
//     (response) => {
//       console.log("SUCCESS!", response.status, response.text);
//       alert("SUCCESS!");
//     },
//     (error) => {
//       console.log("FAILED...", error);
//       alert("FAILED...", error);
//     }
//   );
// });
//email service start
