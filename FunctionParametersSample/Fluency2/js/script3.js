class Language {
  constructor(program) {
    this.progname = program;
  }
  report() {
    return 'Language name is ' + this.progname;
  }
}

class ProgrLang extends Language {
  constructor(program, yearCreated) {
    super(program);
    this.year = yearCreated;
  }
  report2() {
    return this.report() + ', it was created in ' + this.year;
  }
}

lang1 = new ProgrLang("Python", 1991);
document.getElementById("fluency2").innerHTML = lang1.report2();