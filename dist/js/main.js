$(function () {

    $(window).on('scroll', function () {
        var nav = $('.scrolling-navbar');
        if ($(window).scrollTop() > 30) {
            nav.addClass('bg-nav-scroll');
        }
        else {
            nav.removeClass('bg-nav-scroll');
        }
    });

    $('.toggle-icon').click(function(){
        $('.navbar').toggleClass("open");
    })

    $('.scroll-top').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    })


    $('input').focus(function () {
        var txt = $(this).attr("placeholder")
        $(this).attr("placeholder", "");
        $(this).blur(function () {
            $(this).attr("placeholder", txt);
        })
    });


    //Countdown time
    var countDownDate = new Date("Mar 10, 2019 09:30:00").getTime();
    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        $('#timeDay').text(days);
        $('#timeHour').text(hours);
        $('#timeMin').text(minutes);
        $('#timeSec').text(seconds);

        // If the count down is finished, write some text 
        if (distance < 0) {
            clearInterval(x);
        }
    }, 1000);

    $(".navbar a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          
    
          // Store hash
          var hash = this.hash;
    
          var pos = $(hash).offset().top - 100;
          $('html, body').animate({
            scrollTop: pos
          }, 900, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
            $(".navbar a.active").removeClass("active");

            $('.navbar a[href="'+hash+'"').addClass("active");
          });
        } // End if
      });
    
});
