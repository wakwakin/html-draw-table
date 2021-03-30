$(document).ready(function()
{
  $(".increase").click(function()
  {
    if ($(this).val() == "Remove Grid")
    {
      remove_grid();
    }
    else if ($(this).val() == "Set Background")
    {
      set_background();
    }
    else if ($(this).val() == "Set Text")
    {
      set_text();
    }
  });
});

function remove_grid()
{
  var table = document.querySelector("table");

  table.style.borderSpacing = "0";
}

function set_background()
{
  $("body").css("background", document.getElementsByClassName("color-input")[0].value);
}

function set_text()
{
  $("p").css("color", document.getElementsByClassName("color-input")[0].value);
}
