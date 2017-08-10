$(function () {
    'use strict';

    $('.navbar').bootstrapAutoHideNavbar({
        shadow: false
    });

    $(window).scroll(function () {
        $('.hide-element').each(function () {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var position_to_animate_element = parseInt(($element.offset().top + element_height) - (element_height / 2), 10);
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > $element.offset().top + 60)
                $(this).addClass('animated fadeIn');
        });
    });

    $('.carousel').carousel({
        interval: 3500,
        pause: null
    })
});