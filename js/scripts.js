
$(document).ready(function() {
  $("#questions form").submit(function(event) {
    var view = parseInt($("select#view").val());
    var poison = parseInt($("select#poison").val());
    var date = parseInt($("select#date").val());
    var admire = parseInt($("select#admire").val());
    var transportation = parseInt($("select#transportation").val());

    var answer = (view + poison + date + admire + transportation);


    if (answer <= 50) {
      $('#Caribbean').hide();
      $('#Penthouse').hide();
      $('#Tree-House').show();
    } else if (answer >=51 && answer <= 100) {
      $('#Penthouse').hide();
      $('#Tree-House').hide();
      $('#Caribbean').show();

    } else if (answer >=101 && answer <= 150){
      $('#Caribbean').hide();
      $('#Tree-House').hide();
      $('#Penthouse').show();
    }


    event.preventDefault();
  });
});
