document.getElementById("eventClick1").onclick = function() {	alert("this is the JS onclick test");}

function eventClicker() {alert("this is the JS addEventListener test");}
document.getElementById("eventClick2").addEventListener("click", eventClicker);

function onloadFunction() {	alert("this is the JS onload Event test");}

function ontouchstartFunction() {	alert("this is the JS ontouchstart Event test");}

function show(box) {
	var mybox = document.getElementById(box);
	mybox.style.transition = "opacity 1.5s linear 0s";
	mybox.style.opacity = 1;
}
function hide(box) {
	var mybox = document.getElementById(box);
	mybox.style.transition = "opacity 1.5s linear 0s";
	mybox.style.opacity = 0;
}