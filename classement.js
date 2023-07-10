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


const joueurs = [
    { nom: "Aaron", victoires: 6, defaites: 2 },
    { nom: "Udoy", victoires: 4, defaites: 3 },
    { nom: "Sofiane", victoires: 2, defaites: 5 },
    { nom: "Dhia", victoires: 3, defaites: 4 },
    { nom: "Jade", victoires: 7, defaites: 1 },
    { nom: "Abdallah", victoires: 5, defaites: 3 },
    { nom: "Martinez", victoires: 3, defaites: 4 },
    { nom: "Momo.B", victoires: 2, defaites: 6 },
    { nom: "Rihad", victoires: 4, defaites: 4 },
    { nom: "Tina", victoires: 6, defaites: 2 },
    { nom: "Stella", victoires: 3, defaites: 5 },
    { nom: "David", victoires: 5, defaites: 3 },
    { nom: "Momo.H", victoires: 1, defaites: 7 },
    { nom: "Marc", victoires: 4, defaites: 4 },
    { nom: "Xavier", victoires: 6, defaites: 2 },
    { nom: "Harry", victoires: 3, defaites: 4 },
    { nom: "Dario", victoires: 2, defaites: 5 },
    { nom: "Alassane", victoires: 4, defaites: 3 },
    { nom: "Thomson", victoires: 5, defaites: 2 },
    { nom: "Mélanie", victoires: 7, defaites: 1 }
  ];
  
  joueurs.sort((a, b) => b.victoires - a.victoires);
  
  const classementTable = document.getElementById("classement").getElementsByTagName("tbody")[0];
  for (let i = 0; i < joueurs.length; i++) {
    const joueur = joueurs[i];
    const ligne = `<tr><td>${i + 1}</td><td>${joueur.nom}</td><td>${joueur.victoires}</td><td>${joueur.defaites}</td></tr>`;
    classementTable.innerHTML += ligne;
  }
  