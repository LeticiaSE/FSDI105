$(function () {
    'use strict'

    $('.logo img').on('click',loadAjax);

    function loadAjax() {
        $.ajax("script/lenguages.txt",{
            success:addContent,
            type:"GET",
            dataType:'text'
        });
    }
    function addContent(data,status) {
        $('aside').text(data);
        console.log(status);
    }

    $('aside').load('script/example.html');
});