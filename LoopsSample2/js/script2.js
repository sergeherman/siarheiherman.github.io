 var language = {"Python":1991, "R":1993, "Ruby":1995, "Java":1995, "JavaScript":1995, "PHP":1995};
    const para = document.querySelector('p');
    const input = document.querySelector('input');
    const btn = document.querySelector('button');

    btn.addEventListener('click', function() {
      let findLanguage = input.value.toLowerCase();
      input.value = '';
      input.focus();
      for (var i in language) {
        
        if (i.toLowerCase() === findLanguage) {
          para.textContent = i + ' appeared in ' + language[i] + '.';
          break;
        } else if (i !== findLanguage) 
              para.textContent = 'Language not found.'; 
        }
    });  