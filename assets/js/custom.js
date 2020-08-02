         var navMenuDiv = document.getElementById("nav-content");
         var navMenu = document.getElementById("nav-toggle");
         
         var helpMenuDiv = document.getElementById("menu-content");
         var helpMenu = document.getElementById("menu-toggle");
         
         document.onclick = check;
         
         function check(e){
           var target = (e && e.target) || (event && event.srcElement);
         
          
           //Nav Menu
           if (!checkParent(target, navMenuDiv)) {

         	if (checkParent(target, navMenu)) {
         	  if (navMenuDiv.classList.contains("hidden")) {
         		navMenuDiv.classList.remove("hidden");
         	  } else {navMenuDiv.classList.add("hidden");}
         	} else {
         	  navMenuDiv.classList.add("hidden");
         	}
           }
           
           //Help Menu
           if (!checkParent(target, helpMenuDiv)) {
         	if (checkParent(target, helpMenu)) {
         	  if (helpMenuDiv.classList.contains("hidden")) {
         		helpMenuDiv.classList.remove("hidden");
         	  } else {helpMenuDiv.classList.add("hidden");}
         	} 
           }
         }
         
         function checkParent(t, elm) {
           while(t.parentNode) {
         	if( t == elm ) {return true;}
         	t = t.parentNode;
           }
           return false;
         }

       /*Toggle dropdown list*/
       function toggleDD(myDropMenu) {
        document.getElementById(myDropMenu).classList.toggle("invisible");
    }   
         
   /** Odds slider**/
   $(document).ready(function(){
    $('.oddslide').slick({
      infinite: false,
      speed: 900,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      centerPadding:100,
      autoplay: true,
      autoplaySpeed: 12000,
      

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
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
      infinite: false,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding:100,
      autoplay: true,
  autoplaySpeed: 4000,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });




    //trendind slides
    $('.trendingslide').slick({
      infinite: false,
      speed: 900,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      centerPadding:100,
      autoplay: true,
      autoplaySpeed: 8000,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

        //trendind slides
        $('.upcomingslide').slick({
          infinite: false,
          speed: 900,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding:100,
          autoplay: true,
          autoplaySpeed: 13000,
    
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });

          //thisweek slides
          $('.thisweekslide').slick({
            infinite: false,
            speed: 900,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            centerPadding:100,
            autoplay: true,
            autoplaySpeed: 16000,
      
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          });     
          
                    //merchantslide slides
                    $('.merchantslide').slick({
                      infinite: false,
                      speed: 900,
                      infinite: true,
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      centerPadding:100,
                      autoplay: true,
                      autoplaySpeed: 20000,
                
                      responsive: [
                        {
                          breakpoint: 1024,
                          settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true
                          }
                        },
                        {
                          breakpoint: 600,
                          settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                          }
                        },
                        {
                          breakpoint: 480,
                          settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                          }
                        }
                        // You can unslick at a given breakpoint now by adding:
                        // settings: "unslick"
                        // instead of a settings object
                      ]
                    });   

         
         // Open modal:            

                    var openmodal = document.querySelectorAll('.modal-open')
                    for (var i = 0; i < openmodal.length; i++) {
                      openmodal[i].addEventListener('click', function(event){
                      event.preventDefault()
                      toggleModal()
                      })
                    }
                    
                    const overlay = document.querySelector('.modal-overlay')
                    overlay.addEventListener('click', toggleModal)
                    
                    var closemodal = document.querySelectorAll('.modal-close')
                    for (var i = 0; i < closemodal.length; i++) {
                      closemodal[i].addEventListener('click', toggleModal)
                    }
                    
                    document.onkeydown = function(evt) {
                      evt = evt || window.event
                      var isEscape = false
                      if ("key" in evt) {
                      isEscape = (evt.key === "Escape" || evt.key === "Esc")
                      } else {
                      isEscape = (evt.keyCode === 27)
                      }
                      if (isEscape && document.body.classList.contains('modal-active')) {
                      toggleModal()
                      }
                    };
                    
                    
                    function toggleModal () {
                      const body = document.querySelector('body')
                      const modal = document.querySelector('.modal')
                      modal.classList.toggle('opacity-0')
                      modal.classList.toggle('pointer-events-none')
                      body.classList.toggle('modal-active')
                    }

  }); 
   