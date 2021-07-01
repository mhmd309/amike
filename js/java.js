$(function () {
    'use strict';
    // Add Padding Top In Page
    $('body').css('paddingTop', $('.navbar').innerHeight());
    // Add Active Link
    $('.navbar .navbar-nav .nav-item .nav-link').click(function () {
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    });
    // Hover On Button
    $('.button-hover').hover(function () {
        $(this).find('span').eq(0).animate({
            width: '100%'
        }, 500);
    }, function () {
        $(this).find('span').eq(0).animate({
            width: 0
        }, 500);
    });
    // width Progress
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.skills').offset().top) {
            $('.skills .box-skills .progress-pro span').each(function () {
                $(this).animate({
                    width: $(this).attr('data-progress')
                }, 800);
            });
        }
        // scrolltop
        if ($(window).scrollTop() >= 2000) {
            $('#scrolltop').fadeIn();
        } else {
            $('#scrolltop').fadeOut();
        }
    });
    // scroll to top
    $('#scrolltop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 100);
    });
    // Add Class Active On DivPortfolio
    $('.portfolio .option-click div').click(function (){
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('click') === '*') {
            $('.shuffle-image .img').css('opacity', 1);
        } else {
            $('.shuffle-image .img').css('opacity', 0.3);
            $($(this).data('click')).css('opacity', 1);
        }
    });
});
