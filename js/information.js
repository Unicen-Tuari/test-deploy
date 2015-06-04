
$(document).ready(function() {

$("button").on("click", function(event)
{
  $.ajax({
    url:"contenido.html",
    method:"GET",
    dataType:"html",
    success: function(data){
      $("#use-ajax").html(data);
    },
    error: function(){
      $("#use-ajax").html("<h1>Error - Request Failed!</h1>");
    }
  });
  $("#use-ajax").html("<h1>Loading...</h1>");
  event.preventDefault();
});

});
