$(document).ready(function () {
  var products = [
    {
      id: "100",
      name: "iPhone 4S",
      brand: "Apple",
      os: "iOS",
    },
    {
      id: "101",
      name: "Moto X",
      brand: "Motorola",
      os: "Android",
    },
    {
      id: "102",
      name: "iPhone 6",
      brand: "Apple",
      os: "iOS",
    },
    {
      id: "103",
      name: "Samsung Galaxy S",
      brand: "Samsung",
      os: "Android",
    },
    {
      id: "104",
      name: "Google Nexus",
      brand: "ASUS",
      os: "Android",
    },
    {
      id: "105",
      name: "Surface",
      brand: "Microsoft",
      os: "Windows",
    },
  ];
  var displayProducts = products;
  var selectElement =
    "   <div class='filters' ><label for 'os> Select operating system" +
    " <select name='Operating System' id='os'>" +
    " <option value='all'>ALL</option>" +
    "<option value='android'>Android</option>" +
    "<option value='ios'>IOS</option>" +
    "<option value='windows'>Windows</option>" +
    "</select></label>" +
    "<label for='brand'> Select brand <select id='brand' name='brand'>" +
    " <option value='all'>ALL</option>" +
    "<option value='Apple'>Apple</option>" +
    "<option value='Samsung'>Samsung</option>" +
    "<option value='motorola'>Motorola</option>" +
    "<option value='asus'>ASUS</option>" +
    "<option value='microsoft'>Microsoft</option>" +
    "</select></label>" +
    "</div>";

  var table =
    "<table id='myTable'>" +
    "<thead thead ><tr><th>" +
    "ID</th><th>Name</th><th>Brand</th>" +
    "<th>Operating System</th>" +
    "<th>Remove</th></tr></thead>";

  for (let i = 0; i < products.length; i++) {
    table +=
      "<tr><td class='pid'>" +
      products[i].id +
      "</td><td class='pname'>" +
      products[i].name +
      "</td><td>" +
      products[i].brand +
      "</td><td>" +
      products[i].os +
      "</td><td id='hide'>X</td></tr>";
  }
  function display(products) {
    var table =
      "<thead thead ><tr><th>" +
      "ID</th><th>Name</th><th>Brand</th>" +
      "<th>Operating System</th>" +
      "<th>Remove</th></tr></thead>";
    for (let i = 0; i < products.length; i++) {
      table +=
        "<tr class='pid'><td>" +
        products[i].id +
        "</td><td class='pname'>" +
        products[i].name +
        "</td><td>" +
        products[i].brand +
        "</td><td>" +
        products[i].os +
        "</td><td id='hide'>X</td></tr>";
    }
    $("#myTable").html(table + "</table");
  }

  var searchBar =
    "<label for='searchInput'>" +
    "<input id='searchInput' type='text' placeholder='Search..' />" +
    "</label>";

 
  $("#htm").append(selectElement);
  $("#htm").append(table + "</table");
  $("#htm").append(searchBar);

  $("#htm").on("click", "#hide", function () {
    $(this).parent().hide();
  });

  $("#htm").on("click", "select", function () {
    var os = $("#os").val();
    var brand = $("#brand").val();

    if (os && brand) {
      displayProducts = products; //array

      if (os == "all" && brand == "all") {
        console.log("all", os, brand);
      }
      if (os != "all" && brand == "all") {
        displayProducts = displayProducts.filter(
          (item) => item.os.toLocaleLowerCase() == os.toLocaleLowerCase()
        );
        console.log("os", os, brand);
      } else if (os == "all" && brand != "all") {
        displayProducts = displayProducts.filter(
          (item) => item.brand.toLocaleLowerCase() == brand.toLocaleLowerCase()
        );
        console.log("brand", os, brand);
      }
      if (os != "all" && brand != "all") {
        displayProducts = displayProducts.filter(
          (item) =>
            item.os.toLocaleLowerCase() == os.toLocaleLowerCase() &&
            item.brand.toLocaleLowerCase() == brand.toLocaleLowerCase()
        );
        console.log("brandin", "os", os, brand);
      }

      console.log("array", displayProducts);
      display(displayProducts);
    }
  });

  $("#htm").on("keyup", "#searchInput", function () {
    var value = $(this).val().toLowerCase();

    if (!isNaN(value)) {
      $("#myTable tbody tr .pid ").filter(function () {
        $(this)
          .parent()
          .toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    } else {
      $("#myTable tbody tr .pname ").filter(function () {
        $(this)
          .parent()
          .toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    }
  });
});