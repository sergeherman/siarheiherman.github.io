

const language = ['Python:1991', 'HTML:1990', 'CSS:1994', 'Java:1995', 'JavaScript:1995', 'SQL:1970'];
    const para = document.querySelector('p.lang01');
    const input = document.querySelector('input');
    const btn = document.querySelector('button.lang02');

    btn.addEventListener('click', function() {
      let findLanguage = input.value.toLowerCase();
      input.value = '';
      input.focus();
      for (let i = 0; i < language.length; i++) {
        let splitLanguage = language[i].split(':');
        if (splitLanguage[0].toLowerCase() === findLanguage) {
          para.textContent = splitLanguage[0] + ' was developed in ' + splitLanguage[1] + '.';
          break;
        } else if (i === language.length-1) 
              para.textContent = 'Language not found.'; 
        }
    });  


 