$(document).ready(function () {

    $(".clickable1").click(function() {
      $(".design-show").toggle();
      $(".design-hide").toggle();
    });
    $(".clickable2").click(function() {
      $(".development-show").toggle();
      $(".development-hide").toggle();
    });
    $(".clickable3").click(function() {
      $(".productManagement-show").toggle();
      $(".productManagement-hide").toggle();
    });
    $(function(){
      var works = ["work1","work2","work3","work4","work5","work6","work7","work8"]
      works.forEach(function(work){
        $("#"+ work).hover(function (){
          $(this).width(1.25*$(this).width());
          $(this).height(1.25*$(this).height());
          $(this).css("opacity","0.3");
        },
        function () {
          $(this).width(0.8*$(this).width());
          $(this).height(0.8*$(this).height());
          $(this).css("opacity", "1");
          event.preventDefault();

        });
        });
      });
  $("form#contacts").submit(function(event) {

    var names= $("#name").val();
    var email= $("#mce-email").val();
    var message = $("#YourMessage").val();
    alert("Dear " +names+",your message has been received. Thank you for reaching out to us.");
    event.preventDefault();


});
});