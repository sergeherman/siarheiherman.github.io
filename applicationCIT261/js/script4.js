var templeList = document.getElementById("fluency4");

var btn0 = document.getElementById("btn0");

btn0.addEventListener("click", function() {
var ourRequest = new XMLHttpRequest();

ourRequest.open('GET', 'https://sergeherman.github.io/siarheiherman.github.io/fluency4/towndata.json');	
ourRequest.onload = function() {
	
 var ourData = JSON.parse(ourRequest.responseText);
	renderHTML(ourData);
};
ourRequest.send();	
});

function renderHTML(data) {
	var htmlString = "";
	
	for (i = 0; i < data.length; i++) {
	//	htmlString += "<p>" + data[i].name + "is a" + data[i].species + ".</p>";
		htmlString += "<p>" + data[i].name + ".</p>";
	}
 templeList.insertAdjacentHTML('beforeend', htmlString);
	
}





