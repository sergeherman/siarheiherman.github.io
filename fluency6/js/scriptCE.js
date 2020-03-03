function appendLang() {
//parent element
var firstList = document.getElementById("fluency6");
var langList = ["C++", "R", "Python", "Ruby"];
//append child
for ( let lang of langList) {
	let newElement = document.createElement('li');
	newElement.textContent = lang;
	
	firstList.appendChild(newElement);
}
}

function insertLang() {
  var node = document.getElementById("fluency6").lastChild;
  var listIns = document.getElementById("fluency6a");
  listIns.insertBefore(node, listIns.childNodes[0]);
}

function removeLang() {
  var listRem = document.getElementById("fluency6");
  listRem.removeChild(listRem.childNodes[0]);
}