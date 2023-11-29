$(function(){


  //mobile menu
  $(".mobile-menu-toggle").click(function() {
     $(".mobile-menu").slideToggle();
  });

  $(".mobile-menu nav li.has-submenu").click(function() {
    $(this).children("ul").slideToggle();
  });

  new WOW().init();

    //video popup function
    $(".video-btn a").magnificPopup({
        type: "iframe",
        iframe: {
            markup: '<div class="mfp-iframe-scaler">'+
                      '<div class="mfp-close"></div>'+
                      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                    '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
          
            patterns: {
              youtube: {
                index: 'youtube.com/', 
                src: 'https://www.youtube.com/embed/%id%?autoplay=1'
              },
            },
        }
    });

    $('.counter').counterUp({
      delay: 10,
      time: 1500
  });


  // feedback slider
  $('.fd-slider').slick({
    slidesToShow: 3,
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1580,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        }
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow:1,
        }
      }
    ]
  });




});