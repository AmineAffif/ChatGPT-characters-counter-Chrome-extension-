document.body.addEventListener('input', function (e) {
  const target = e.target;
  if (target.id === 'prompt-textarea') {
    const charCount = target.value.length;

    // Trouvez l'élément de comptage existant ou créez-en un nouveau
    let countElement = document.getElementById('charCount');
    if (!countElement) {
      countElement = document.createElement('p');
      countElement.id = 'charCount';
      // Ajoutez l'élément de comptage en tant que premier enfant de <body>
      document.body.insertBefore(countElement, document.body.firstChild);

      // Appliquez le style à l'élément
      countElement.style.position = 'absolute';
      countElement.style.bottom = '5rem';
      countElement.style.right = '2.2rem';
      countElement.style.zIndex = '2';
      countElement.style.fontSize = '0.5rem';
      countElement.style.fontWeight = 'bold';
      countElement.style.background = '#343541';
      countElement.style.padding = '0 5px';
      countElement.style.textAlign = 'center';
      countElement.style.borderRadius = '0.1rem';
    }

    // Mettez à jour le contenu de l'élément de comptage
    countElement.textContent = `${charCount}/4096`;

    // Changez la couleur du texte en rouge si le nombre de caractères dépasse 4096
    if (charCount > 4096) {
      countElement.style.color = 'red';
    } else {
      countElement.style.color = 'white';
    }
  }
});