$(function () {
    'use strict';
    AOS.init();

    $('.sc-outline').parallax({ imageSrc: './assets/images/outline_bg.jpg' });
    $('.calendar').parallax({ imageSrc: './assets/images/calendar_bg.jpg' });

    $('#totop').click(function () {
        $('body, html').animate({ scrollTop: 0 }, 400);
    });

    $(window).bind('load resize scroll', function () {
        const windowScrollToTop = $(window).scrollTop();
        const offsetGNavi = $('#gnavi').offset().top + $('#gnavi').outerHeight();
        if (windowScrollToTop > offsetGNavi && $(window).width() > 1230) {
            $('#gnavi-fixed').addClass('show');
        } else {
            $('#gnavi-fixed').removeClass('show');
        }
    });

    $(window).bind('load', function () {
        $('.clinic-slick').slick({
            autoplay: true,
            dots: false,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 3000,
            centerMode: true,
            variableWidth: true,
            initialSlide: 1,
            pauseOnHover: false,
            pauseOnFocus: false,
        });
    });

    $(window).bind('resize', function () {
        if ($(window).width() <= 1230) {
            $('.menu-icon').removeClass('active');
            $('#header').removeClass('active');
            $('#gnavi').stop().slideUp();
        } else {
            $('#gnavi').removeAttr('style');
        }
    });

    $('.menu-icon').click(function () {
        if ($(this).hasClass('active')) {
            $('.menu-icon').removeClass('active');
            $('#header').removeClass('active');
            $('#gnavi').stop().slideToggle();
        } else {
            $(this).toggleClass('active');
            $('#header').addClass('active');
            $('#gnavi').stop().slideToggle();
        }
    });
});