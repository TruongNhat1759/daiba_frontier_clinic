$(function () {
    'use strict';

    $('.sc-outline').parallax({ imageSrc: './assets/images/outline_bg.jpg' });
    $('.calendar').parallax({ imageSrc: './assets/images/calendar_bg.jpg' });

    $('#totop').click(function () {
        $('body, html').animate({ scrollTop: 0 }, 400);
    });

    $(window).bind('load resize scroll', function () {
        let windowScrollToTop = $(window).scrollTop();
        let offsetMainvisual = $('#mainvisual').offset().top + $('#mainvisual').outerHeight() - $('.mainvisual-banner').outerHeight() - $('#gnavi').outerHeight();
        if (windowScrollToTop > offsetMainvisual && $(window).width() > 1230) {
            $('.mainvisual-banner').addClass('fixed');
        } else {
            $('.mainvisual-banner').removeClass('fixed');
        }
    });

    $(window).bind('load', function () {
        AOS.init();
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