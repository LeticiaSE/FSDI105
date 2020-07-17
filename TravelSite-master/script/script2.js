$(function () {
    "use strict"

    var copy=$("main article:first").clone();

    $(copy).appendTo("main");
    $("main").prepend(copy);

    // Challenge copy the train section (last) and paste it at the top of the main

    var copyTrain=$("main article:last").clone();
    $("main").prepend(copyTrain);
});