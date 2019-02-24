$(function(){
    $(window).on('scroll', function() {
        var nav = $('.scrolling-navbar');
        if($(window).scrollTop()>30) {
            nav.addClass('bg-nav-scroll');
            $('.header-menu').hide(500);
        }
        else{
            nav.removeClass('bg-nav-scroll');
            $('.header-menu').show(500);
        }
    });
    $('.dropdown-menu button').on("click",function(){
        $(this).parent().prev().text($(this).text());
    });
    $('.navbar-nav .dropdown').on({
        'mouseenter': function(){
            $(this).toggleClass('show');
            $(this).find('.dropdown-menu').addClass('show');
        },
        'mouseleave': function(){
            $(this).toggleClass('show');
            $(this).find('.dropdown-menu').removeClass('show');
        }
    });


    $('.scroll-top').click(function(){
        $('html,body').animate({
            scrollTop: 0
        },500);
    })
    
});