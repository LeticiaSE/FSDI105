$(function () {
    'use strict'

    $('main article img').on('mouseenter',bigger);
    $('main article img').on('mouseleave', smaller);

    //aumenta una imagen de tamaño
    function bigger() {         
        $(this).animate({'width':'100%' }); 
    }

    //disminuye una imagen
    function smaller() {
        $(this).animate({'width':'350px'});
    }

    $('.logo img').click(function () {
        $('main article:first').slideUp(1000);
    });

    $('aside').click(function () {
        $('main article:first').slideDown(1000);
    });
})