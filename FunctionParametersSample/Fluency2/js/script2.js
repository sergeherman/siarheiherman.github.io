var language = new Object();
language.languageName = "R";
language.yearCreated = 1993;

var language2 = new Object();
language2.languageName = "Python";
language2.yearCreated = 1991;

document.getElementById("fluency2").innerHTML =
" 1) First object created using the JavaScript keyword new: " +
language.languageName + " was created in  " + language.yearCreated + ". 2) Second object created using the JavaScript keyword new: "+language2.languageName + " was created in  " + language2.yearCreated;