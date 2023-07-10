
// Appel initial de la fonction demarrage
// Appel initial de la fonction demarrage
const loader = document.querySelector('.loader');

window.addEventListener('load', () => {
  setTimeout(() => {
    loader.style.display = 'none';
  }, 4000); // Délai de 4000 millisecondes (4 secondes)
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


// Date cible
var targetDate = new Date("March 25, 2024").getTime();

// Mettre à jour le compte à rebours toutes les 1 seconde
var countdownInterval = setInterval(function () {
  // Obtenir la date et l'heure actuelles
  var now = new Date().getTime();

  // Calculer la différence entre la date cible et la date actuelle
  var timeRemaining = targetDate - now;

  // Calculer les jours, heures, minutes et secondes restantes
  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Afficher les valeurs dans les éléments correspondants du HTML
  document.getElementById("days").innerHTML = days + " jours";
  document.getElementById("hours").innerHTML = hours + " heures";
  document.getElementById("minutes").innerHTML = minutes + " minutes";
  document.getElementById("seconds").innerHTML = seconds + " secondes";

  // Vérifier si la date cible est atteinte
  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "Date butoir atteinte !";
  }
}, 1000);
