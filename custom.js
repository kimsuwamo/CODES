 $(document).ready(function () {
             $('#tribeca-loft img').mouseenter(function () {
                 $('#tribeca-loft h5').css("opacity", "1");
             });
             $('#tribeca-loft img').mouseleave(function () {
                 $('#tribeca-loft h5').css("opacity", "0");
             });
         }
         $('#tribeca-loft img').mouseenter(function () {

             $('#tribeca-loft h5').animate({
                 "opacity": "1"
             }, 800);
         });

         $('#tribeca-loft img').mouseleave(function () {
             $('#tribeca-loft h5').animate({
                 opacity: 0
             }, 800);

         });