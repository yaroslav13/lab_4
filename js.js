
class Product {
	constructor(title, description, price){
       this.title = title;
       this.description  = description;
       this.price = price;
	}
}

function loadXMLDoc() {
  fetch('https://yaroslav13.github.io/xml_parse/shop_page.xml').then(function(responce){
    return responce.text();
  }).then(function(data){
     myFunction(data);
  }).catch(function(error){
  	console.log(error);
  });
}

function myFunction(xml) {
  var i;
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(xml,"text/xml")
  var table="<tr><th>Title</th></tr>";
  var x = xmlDoc.getElementsByTagName("products");
  for (i = 0; i <x.length; i++) { 
  	var product = Product(
        x[i].getElementsByTagName("title")[0].nodeValue,
        x[i].getElementsByTagName("description")[0].nodeValue,
        x[i].getElementsByTagName("price")[0].nodeValue 
  	);
    table += "<tr><td>" +
    product.title +
    "</td><td>" +
    product.price +
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}

loadXMLDoc();


