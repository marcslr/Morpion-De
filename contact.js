const form = document.getElementById('contact-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Récupérer les valeurs des champs
  const name = document.getElementById('name').value;
  const lastname = document.getElementById('lastname').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Valider les champs avec des regex
  const nameRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

  if (!name.match(nameRegex)) {
    alert('Veuillez entrer un nom valide.');
    return;
  }

  if (!lastname.match(nameRegex)) {
    alert('Veuillez entrer un prénom valide.');
    return;
  }

  if (!email.match(emailRegex)) {
    alert('Veuillez entrer une adresse e-mail valide.');
    return;
  }

  // Envoyer les données du formulaire
  alert('Félicitations ! Votre message a été envoyé.');
  form.reset(); // Réinitialiser le formulaire après l'envoi
});

function affichageDeLaPage() {
  // Masque le loader et affiche le contenu de la page
  document.querySelector(".loader").style.display = "none";
  document.querySelector(".accueil").style.display = "block";
}
const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");

menuHamburger.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-menu');
});