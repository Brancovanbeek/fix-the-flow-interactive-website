document.querySelectorAll('.footer-menu a').forEach(link => {
    if (link.href == window.location.href) {
      link.classList.add('active');
    }
  });
  
  const learnNowButton = document.getElementById('learn-now');
  const signInDialog = document.getElementById('sign-in-dialog');
  const closeDialogButton = document.getElementById('close-dialog');
  
  //Open dialog bij knopklik//
  learnNowButton.addEventListener('click', () => {
      signInDialog.showModal();
  });
  
  //Sluit dialog bij klik op de sluitknop//
  closeDialogButton.addEventListener('click', () => {
      signInDialog.close();
  });