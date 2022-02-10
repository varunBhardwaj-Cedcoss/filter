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

var add = "";
for (let i = 0; i < products.length; i++) {
  add +=
    `<tr><td>` +
    products[i].id +
    `</td><td>` +
    products[i].name +
    `</td><td>` +
    products[i].brand +
    `</td><td>` +
    products[i].os +
    `</td><td id='hide'>X</td></tr>`;
}
var filter = `<label for 'os> Select operating system 
       <select name='Operating System' id='os'> 
      <option data-foo="all" value=''>ALL</option> 
      <option value='Android'>Android</option> 
      <option value='ios'>IOS</option>" 
      <option value='windows'>Windows</option> 
      </select></label> 
      <label for='brand'> Select brand <select id='brand' name='brand'> 
      <option data-foo="all" value=''>ALL</option> 
      <option  data-foo="ios" value='Apple'>Apple</option> 
      <option data-foo="Android"  value='Samsung'>Samsung</option> 
      <option data-foo="Android"  value='motorola'>Motorola</option> 
      <option data-foo="Android"  value='asus'>ASUS</option>
      <option data-foo="Windows"  value='Microsoft'>Microsoft</option>  
      </select></label> 
      `;
var inp = `<input type="text" id="search"/>`;
var table = `<table id=myTable style=" text-align: center;">
  <tr>
	<th>ID</th>
	<th>Name</th>
	<th>Brand</th>
	<th>Operating System</th>
	<th>Remove</th>
  </tr> 
  <tbody id="dis">
  ${add}
  </tbody>
  
  </table>`;

$("#htm").append(filter);
$("#htm").append(table);
$("#htm").append(inp);

$("#htm").on("click", "#hide", function () {
  $(this).parent().hide();
});
var com = "";
var extra = "";

$("#htm").on("click", "#os", function () {
  var valu = $(this).val().toLowerCase();
  com = valu;
  console.log(valu);
  $("#myTable #dis tr").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(valu) > -1);
  });
});

$("select").change(function () {
  var selected = $(this).find("option:selected");
  extra = selected.data("foo");
});

$("#htm").on("click", "#brand", function () {
  $("#dis").show();
  var value = $(this).val().toLowerCase();
  console.log(value);
  console.log(extra);
    if (extra.toLowerCase() == com) {
      $("#myTable #dis tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    } else {
      $("#dis").hide();
    }
});

$("#htm").on("keyup", "#search", function () {
  var val = $(this).val().toLowerCase();
  console.log(val);
  $("#myTable #dis tr").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(val) > -1);
  });
});
