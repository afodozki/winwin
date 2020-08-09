$(document).ready(function(){
  if(window.innerWidth < 767){
    $('.oddslide-mobile').removeClass('oddslide');
  };

  if(window.innerWidth < 767){
    $('.trendingslide-mobile').removeClass('trendingslide');
  };

  if(window.innerWidth < 767){
    $('.thisweekslide-mobile').removeClass('thisweekslide');
  };
  if(window.innerWidth < 767){
    $('.merchantslide-mobile').removeClass('merchantslide');
  };

  

});
         
   /** Odds slider**/
   $(document).ready(function(){
    $('.oddslide').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      dots: true,
  arrows:false,
  infinite: true,
      

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            arrows:false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
            arrows:false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            infinite: true,
            dots: true,
            arrows:false,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    //adslide
    $('.adslide').slick({
      infinite: true,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      dots: true,
      arrows:false,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows:false,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows:false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            infinite: true,
            arrows:false,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

//loginslide
$('.loginslide').slick({
  infinite: true,
  speed: 900,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  arrows:false,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows:false,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows:false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows:false,
        infinite: true,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});




//adslided
$('.adslided').slick({
  infinite: true,
  speed: 900,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows:false,
  autoplay: true,
  autoplaySpeed: 2500,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows:false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        arrows:false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        arrows:false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


    //trendind slides
    $('.trendingslide').slick({
      infinite: true,
      speed: 900,
      slidesToShow: 4,
      slidesToScroll: 1,
      centerPadding:100,
      autoplay: true,
      autoplaySpeed: 8000,
      dots: true,
      arrows:false,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            arrows:false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
            arrows:false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows:false,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

        //trendind slides
        $('.upcomingslide').slick({
          infinite: true,
          speed: 900,
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding:100,
          autoplay: true,
          autoplaySpeed: 13000,
          dots: true,
          arrows:false,
    
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows:false,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows:false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows:false,
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });

          //thisweek slides
          $('.thisweekslide').slick({
            infinite: true,
            speed: 900,
            slidesToShow: 4,
            slidesToScroll: 1,
            centerPadding:100,
            autoplay: true,
            autoplaySpeed: 16000,
            dots: true,
            arrows:false,
      
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true,
                  arrows:false,
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true,
                  arrows:false,
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true,
                  arrows:false,
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          });     
          
                    //merchantslide slides
                    $('.merchantslide').slick({
                      infinite: true,
                      speed: 900,
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      centerPadding:100,
                      autoplay: true,
                      autoplaySpeed: 20000,
                      dots: true,
                      arrows:true,
                
                      responsive: [
                        {
                          breakpoint: 1024,
                          settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true,
                            arrows:false,
                          }
                        },
                        {
                          breakpoint: 600,
                          settings: {
                            slidesToShow: 3,
                            infinite: true,
                            dots: true,
                            arrows:false,
                            slidesToScroll: 2
                          }
                        },
                        {
                          breakpoint: 480,
                          settings: {
                            slidesToShow: 3,
                            infinite: true,
                            dots: true,
                            arrows:false,
                            slidesToScroll: 1
                          }
                        }
                        // You can unslick at a given breakpoint now by adding:
                        // settings: "unslick"
                        // instead of a settings object
                      ]
                    });                     




//tierslided
$('.tierslide').slick({
  infinite: true,
  speed: 900,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '100px',
  dots: false,
  arrows:false,
  autoplay: true,
  autoplaySpeed: 2500,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows:false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        arrows:false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        arrows:false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});                    
                  }); 

 

 

   