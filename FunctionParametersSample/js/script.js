 
    const para = document.querySelector('p');
    const input = document.querySelector('input');
    const btn = document.querySelector('button');

    btn.addEventListener('click', function(language) {
	var language = ['Python:1991', 'R:1993', 'Ruby:1995', 'Java:1995', 'JavaScript:1995', 'PHP:1995'];
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