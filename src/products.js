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
	
var add='';
  for (let i = 0; i < products.length; i++) {
 add +=`<tr><td>` +products[i].id +
	  `</td><td>` +
	  products[i].name +
	  `</td><td>` +
	  products[i].brand +
	  `</td><td>` +
	  products[i].os +
	  `</td><td id='hide'>X</td></tr>`;
  }
  var filter =
       `<label for 'os> Select operating system 
       <select name='Operating System' id='os'> 
      <option value=''>ALL</option> 
      <option value='android'>Android</option> 
      <option value='ios'>IOS</option>" 
      <option value='windows'>Windows</option> 
      </select></label> 
      <label for='brand'> Select brand <select id='brand' name='brand'> 
       <option value=''>ALL</option> 
      <option value='Apple'>Apple</option> 
      <option value='Samsung'>Samsung</option> 
      <option value='motorola'>Motorola</option> 
      <option value='asus'>ASUS</option> 
      </select></label> 
      `;
  var inp=`<input type="text" id="search"/>`;
  var table=`<table id=myTable style=" text-align: center;">
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
  
  </table>` ;
  
   $('#htm').append(filter);
  $('#htm').append(table,);
  $('#htm').append(inp);
 
  $('#htm').on('click','#hide',function(){
	  $(this).parent().hide();
  });
  $("#htm").on("click", '#os',function() {
    var value = $(this).val().toLowerCase();
    console.log(value);
    $("#myTable #dis tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
  $("#htm").on("click", '#brand',function() {
    var value = $(this).val().toLowerCase();
    console.log(value);
    $("#myTable #dis tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
  $("#htm").on("keyup", '#search',function() {
    var value = $(this).val().toLowerCase();
    console.log(value);
    $("#myTable #dis tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
  
  