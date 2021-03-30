$(document).ready(function()
{
  var table = document.querySelector("table");
  var created_color = 0;

  $(".color-input").keyup(function()
  {
    $(".current-color").css("background", $(".color-input").val());
    created_color = $(".color-input").val();
  });

  $("table").click(function()
  {
    $("td").click(function()
    {
      $(this).css("background", created_color);
    });
  });
});
