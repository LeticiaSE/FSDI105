$(function(){
    "use strict"
    console.log("Loaded");
    //all the code here

    // selectors Js Vs JQuery
    document.getElementById("header"); //js
    $("header"); //jQuery

    document.getElementById("menu");
    $("menu");

    document.getElementsByClassName("Logo");
    $(".Logo");

    $("header, .contenedor .logo img").hide();


    // Challenge hide the see menu link
    $("#menu");

    $("main article:first p:last").hide();


});

console.log("1");