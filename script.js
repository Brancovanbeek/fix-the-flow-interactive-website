//ACTIVE ICON MOBILE FOOTER//
document.querySelectorAll('.footer-menu a').forEach(link => {
    if (link.href == window.location.href) {
      link.classList.add('active');
    }
});


//DIALOOG SLUITEN//
const loginButton = document.getElementById('login');
const signInDialog = document.getElementById('sign-in-dialog');
const closeDialogButton = document.getElementById('close-dialog');
  
//Open dialog bij knopklik//
loginButton.addEventListener('click', () => {
    signInDialog.showModal();
});
  
//Sluit dialog bij klik op de sluitknop//
closeDialogButton.addEventListener('click', () => {
    signInDialog.close();
});


//VERANDEREN VAN DE FORM//
// Selecteer elementen
const signInSection = document.querySelector('.sign-in');
const signUpSection = document.querySelector('.sign-up');
const signUpLink = document.querySelector('#signup-link');
const signInLink = document.querySelector('#signin-link');

// Functie om secties te wisselen
function toggleSections(showSection, hideSection) {
    showSection.classList.add('active');
    hideSection.classList.remove('active');
}

// Event listeners
signUpLink.addEventListener('click', () => {
    toggleSections(signUpSection, signInSection); // Toon Sign-Up
});

signInLink.addEventListener('click', () => {
    toggleSections(signInSection, signUpSection); // Toon Sign-In
});
