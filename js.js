
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
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(xml,"text/xml")
  var table="<tr><th>Title</th><th>Description</th><th>Price</th></tr>";
  var x = xmlDoc.getElementsByTagName("products");
  for (var i = 0; i <x.length; i++) { 
  	var product = new Product(
        x[i].getElementsByTagName("title").childNodes.nodeValue,
        x[i].getElementsByTagName("description").childNodes.nodeValue,
        x[i].getElementsByTagName("price").childNodes.nodeValue);
    table += "<tr><td>" +
    product.title +
    "</td>" +
    "<td>" + product.description + "</td><td>"
    product.price +
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}

loadXMLDoc();


