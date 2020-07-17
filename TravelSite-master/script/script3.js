$(function () {
   var counter=0;
   
    $("div.logo img").on('mouseenter',function(){
    console.log("mouse enter the logo");
    counter++;
    console.log(counter);
   });

   $("div.logo img").on('mouseleave',function(){
    console.log("mouse leave the logo");
   });

   //$("#navegacion").hide();
   //$("#menu").on('click',function(){
    //   $("#navegacion").show();
   //});

   $("main article").addClass('bordered');

   //challenge select the menu links and add the bordered class when you click on it

   $('.navegacion ul li a').on('click',function(){
     $(this).addClass('bordered');
   });

});