# Interactive Website
Ik ben Branco van Beek en ik doe de studie Front-end Design & Webdevelopment en ik heb gekozen voor het project Oncollaboration, dat is een ontwerp voor een online platform voor samenwerking en kennisdeling tussen Indoneschische en Nederlandse radiotherapeuten. Oncollaboration is het afstudeerwerk van oud-CMD student Sergio Eijben. Sergio is in opdracht van radiotherapeute Judi van Diessen van het Antoni van Leeuwenhoek ziekenhuis afgestudeerd op de vraag over hoe de samenwerking en kennisdeling tussen Indoneschische en Nederlandse radiotherapeuten te verbeteren. Onze opdracht is dan om op basis van het aangeleverde ontwerp het online platform Oncollabration te ontwikkelen. Ik heb gekozen om een website te maken voor het Antoni van Leeuwenhoek ziekenhuis in Amsterdam om kennis op het gebied van radiotherapie te delen met de Indonesische ziekenhuizen.

## Beschrijving

Dit project is een login- en registratiepagina voor Oncollaboration die een interactieve en gebruiksvriendelijke ervaring biedt. Het biedt de mogelijkheid om gebruikers zich in te laten loggen of zich te registreren via een modal dialoogvenster, die toegankelijk is via een knop op de homepage. Gebruikers kunnen tussen de login en registratie formulieren schakelen zonder de pagina opnieuw te laden, wat de gebruikerservaring verbetert en zorgt voor een naadloze interface.

<img src="CPT2412181158-426x703.gif" >

## Interacties
1. Login Modal: Wanneer de gebruiker op de Login knop klikt, opent er een modal venster met een formulier voor inloggen. Het venster kan worden gesloten door op de sluitknop te klikken.
2. Schakelen tussen Login en Registratie: In de modal kunnen gebruikers schakelen tussen het loginformulier en het registratieformulier via links, zonder de pagina opnieuw te laden.
Gebruik van hover-effecten: De knoppen bieden visuele feedback door hun kleur te veranderen bij hover, wat aangeeft dat de gebruiker met een interactieve element werkt.
Ontwerpkeuzes:
3. Visuele feedback: Bij het klikken op knoppen wordt de actie bevestigd door het veranderen van de knopkleur. Dit zorgt voor duidelijke feedback over wat de gebruiker kan verwachten.
4. Duidelijke en eenvoudige formulieren: Het inlog- en registratieformulier zijn eenvoudig en helder ingericht, zonder overbodige informatie, wat zorgt voor een makkelijke gebruikerservaring.
5. Toegankelijkheid: Het gebruik van labels bij formulieren helpt de gebruikers, vooral met visuele beperkingen, om de interface beter te begrijpen. Foutmeldingen en visuele aanwijzingen voor foutieve invoer zijn duidelijk en intuïtief.
6. Schakelbare secties: De mogelijkheid om tussen login en registratie te schakelen helpt gebruikers die misschien al een account hebben of die willen registreren zonder meerdere pagina’s te hoeven laden.
7. User Test: De ontwerpen werden getest op verschillende apparaten en schermformaten om te verzekeren dat de gebruikerservaring consistent blijft, vooral op mobiele apparaten.


1. Design + wireframe
<img width="400" alt="Scherm­afbeelding 2024-12-06 om 10 03 16" src="https://github.com/user-attachments/assets/0808bbb6-110a-4872-997a-ea75d4c8b4af">

## Kenmerken

### HTML Structuur
De HTML bestaat uit een <dialog> element voor het modale venster, met twee secties: één voor login en één voor registratie. Beide secties bevatten een formulier met invoervelden, knoppen en links om tussen de formulieren te schakelen.

```
<!-- Login Modal -->
<dialog id="sign-in-dialog">
  <button id="close-dialog">&times;</button>
  <form>
    <h2>Sign In</h2>
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <button type="submit">Log In</button>
    <div class="divider"><span>or</span></div>
    <button id="google-signin">Sign in with Google</button>
    <p>
      <span>Don't have an account?</span>
      <a href="#" id="signup-link">Sign Up</a>
    </p>
  </form>
</dialog>

<!-- Sign Up Modal -->
<dialog id="sign-up-dialog">
  <button id="close-dialog-signup">&times;</button>
  <form>
    <h2>Sign Up</h2>
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <input type="password" placeholder="Confirm Password">
    <button type="submit">Sign Up</button>
    <div class="divider"><span>or</span></div>
    <button id="google-signin">Sign up with Google</button>
    <p>
      <span>Already have an account?</span>
      <a href="#" id="signin-link">Sign In</a>
    </p>
  </form>
</dialog>
```

### JavaScript
JavaScript regelt de interactiviteit, zoals het openen en sluiten van de modale vensters en het wisselen tussen de login- en registratieformulieren.

Voorbeeld van de JavaScript voor het openen en sluiten van beide dialoogvensters en het schakelen tussen login en sign-up:

```
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


