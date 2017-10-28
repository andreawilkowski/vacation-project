$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var view = parseInt($("select#view").val());
    var poison = parseInt($("select#poison").val());
    var date = parseInt($("select#date").val());
    var admire = parseInt($("select#admire").val());
    var transportation = parseInt($("select#transportation").val());
    var person = $("input#person").val();

    var answer = (view + poison + date + admire + transportation);


    if (answer <= 50) {
      $('#Caribbean').hide();
      $('#Penthouse').hide();
      $('#Tree-House').show();
      $(".person").text(person);
    } else if (answer >50 && answer <= 100) {
      $('#Penthouse').hide();
      $('#Tree-House').hide();
      $('#Caribbean').show();
      $(".person").text(person);

    } else if (answer >100 && answer <= 150){
      $('#Caribbean').hide();
      $('#Tree-House').hide();
      $('#Penthouse').show();
      $(".person").text(person);
    }


    event.preventDefault();
  });
});
