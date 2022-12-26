$(document).ready(function () {
  $(".images-carousel").owlCarousel({
    navigation: true, 
    rtl:true,
    items: 1,
  });
  $('[data-fancybox]').fancybox({
    buttons: [
      "zoom",
      //"share",
      "slideShow",
      "fullScreen",
      "download",
      "thumbs",
      "close"
    ],
    protect: true,
    preventCaptionOverlap: true,
  });

 
  
  });

  


