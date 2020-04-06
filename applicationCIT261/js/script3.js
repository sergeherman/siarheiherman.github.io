localStorage.setItem("langCreator1", "* HTML was created by Tim Berners-Lee (United Kingdom)");
localStorage.setItem("langCreator2", "* CSS was created by Tim Berners-Lee (United Kingdom)");
localStorage.setItem("langCreator3", "* Java Script was created by Brendan Eich (USA)");
localStorage.setItem("langCreator4", "* SQL was created by Raymond Boyce and Donald Chamberlin (USA)");
localStorage.setItem("langCreator5", "* Python was created by Guido van Rossum (Netherlands)");
localStorage.setItem("langCreator6", "* Java was created by James Gosling (Canada)");

document.getElementById("localStorage1").innerHTML = localStorage.getItem("langCreator1");
document.getElementById("localStorage2").innerHTML = localStorage.getItem("langCreator2");
document.getElementById("localStorage3").innerHTML = localStorage.getItem("langCreator3");
document.getElementById("localStorage4").innerHTML = localStorage.getItem("langCreator4");
document.getElementById("localStorage5").innerHTML = localStorage.getItem("langCreator5");
document.getElementById("localStorage6").innerHTML = localStorage.getItem("langCreator6");