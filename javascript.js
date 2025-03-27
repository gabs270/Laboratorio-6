$(document).ready(function(){
    $(".form-check").mouseenter(function(){
      $(this).css("color", "rgb(95, 154, 112)");
    });
    $(".form-check").mouseleave(function(){
      $(this).css("color", "black");
    });

    $(".form-check").change(function(){
      $(this).toggleClass("text-success");
    });

   
  });