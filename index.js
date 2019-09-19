var addCat = function()
{ var node = document.createElement("h2");
 node.innerText = "Aliens are real, Area 51 has all my Secrets";
 var body = document.querySelector("body");
 body.appendChild(node); 
}
var addDog = function() 
{  
var node = document.createElement("h2");
node.innerText = "My Top Secret info is not really Top Secret";
var body = document.querySelector("body");
body.appendChild(node);
} 
function mouseDown() 
{ document.getElementById("Click").style.color = "Green";} 
function mouseUp() 
{ document.getElementById("Click").style.color = "Blue"; }