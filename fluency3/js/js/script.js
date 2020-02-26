var language = '{"langName":"R", "yearCreated":1993}'
var lang1 = JSON.parse(language);


document.getElementById("fluency3").innerHTML = lang1.langName + " was created in " + lang1.yearCreated;
