var total_row = 0;
var total_col = 0;

var row = document.getElementsByTagName("tr");
var col = document.getElementsByTagName("td");

// COUNT BOXES
var information = document.querySelector("p");
information.innerText = "Grid: " + total_row + "x" + total_col;

$(document).ready(function()
{
  $(".increase").click(function()
  {
    // ADD ROW
    if ($(this).val() == "+ Row")
    {
      add_row();
    }
    // ADD COLUMN
    else if ($(this).val() == "+ Column")
    {
      add_col();
    }
    // SHOW GRID
    else if ($(this).val() == "Show Grid")
    {
      grid();
    }
  });
});

function add_row()
{
  var table = document.querySelector("table");
  var create_row = document.createElement("tr");

  table.appendChild(create_row);
  if (total_col == 0)
  {
    var create_data = document.createElement("td");
    create_row.appendChild(create_data);
    create_data.className = "cell";
  }

  for (var i = 0; i < total_col; i++)
  {
    var create_data = document.createElement("td");
    create_row.appendChild(create_data);
    create_data.className = "cell";
  }

  total_row++;

  if (total_col == 0)
  {
    total_col++;
  }

  information.innerText = "Grid: " + total_row + "x" + total_col;
}

function add_col()
{
  var create_col = document.createElement("td");

  if (total_row == 0)
  {
    var table = document.querySelector("table");
    var create_row = document.createElement("tr");
    table.appendChild(create_row);
    create_row.className = "cell";

    total_row++;
  }

  for (var i = 0; i < row.length; i++)
  {
    var create_data = document.createElement("td");

    row[i].appendChild(create_data);
    create_data.className = "cell";
  }

  if (total_row == 0)
  {
    var create_row = document.createElement("tr");
  }

  total_col++;
  information.innerText = "Grid: " + total_row + "x" + total_col;
}

function grid()
{
  var table = document.querySelector("table");

  table.style.borderSpacing = "1px";
}
