const Language = function(langName, yearCreated, type){
  this.langName = langName;
  this.yearCreated = yearCreated;
  this.type = type;
};
Language.prototype.report = function(){
  return this.langName + ` was created in ${this.yearCreated} , it is an ${this.type} language.`
};
const lang1 = new Language('Python', 1991 , 'interpreted');
document.getElementById("fluency2").innerHTML = lang1.report();S