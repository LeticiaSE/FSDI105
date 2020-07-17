$(function () {
    'use strict'

    $('main article:first h2').html('<h2> Hello World in JQuery</h2>');

    $('.navegacion ul li:first a').attr('href','http://sdgku.edu');

    $('main article:first img').on('click',function(){
        $(this).attr('src','img/imagen_2.jpg');
    }); //declarinig and execting function

    $('main article:first h2').css({
        'color':'#e4e25e',
        'background':'black'
    });

    $(".navegacion ul li a").on('click',changeColor);
    function changeColor(){
    //    $('#navegation').css({'background: black'});
    }
})