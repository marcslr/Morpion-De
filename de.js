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


// Récupérer les éléments du DOM

const player1ScoreElement = document.getElementById('player1-score');
const player2ScoreElement = document.getElementById('player2-score');
const player1CurrentElement = document.getElementById('player1-current');
const player2CurrentElement = document.getElementById('player2-current');
const rollButton = document.getElementById('btn-roll');
const holdButton = document.getElementById('btn-hold');
const newGameButton = document.getElementById('btn-new-game');
const player1TitleElement = document.getElementById('player1-title');
const player2TitleElement = document.getElementById('player2-title');
const player1NameElement = document.getElementById('player1-name');
const player2NameElement = document.getElementById('player2-name');

let scores, currentScore, activePlayer, gamePlaying;

// Fonction d'initialisation du jeu
function init() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  player1ScoreElement.textContent = 'Score : 0';
  player2ScoreElement.textContent = 'Score : 0';
  player1CurrentElement.textContent = '0';
  player2CurrentElement.textContent = '0';

  player1TitleElement.textContent = player1NameElement.value || 'Joueur 1';
  player2TitleElement.textContent = player2NameElement.value || 'Joueur 2';
}

// Fonction de changement de joueur
function nextPlayer() {
  currentScore = 0;
  document.getElementById(`player${activePlayer + 1}-current`).textContent = '0';
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  document.getElementById(`player${activePlayer + 1}`).classList.add('active');
  document.getElementById(`player${activePlayer === 0 ? 2 : 1}`).classList.remove('active');
}

// Fonction de lancer de dé
function rollDice() {
  if (gamePlaying) {
    const dice = Math.floor(Math.random() * 6) + 1;
    const diceElement = document.getElementById(`player${activePlayer + 1}-current`);
    diceElement.textContent = dice;

    if (dice !== 1) {
      currentScore += dice;
      diceElement.textContent = currentScore;
    } else {
      alert(`${activePlayer === 0 ? player1TitleElement.textContent : player2TitleElement.textContent}, tu as fait 1 ! Tu perds tout ton en cours. C'est à ton adversaire !`);
      nextPlayer();
    }
  }
}

// Fonction de gestion du score global
function holdScore() {
  if (gamePlaying) {
    scores[activePlayer] += currentScore;
    document.getElementById(`player${activePlayer + 1}-score`).textContent = 'Score : ' + scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      document.getElementById(`player${activePlayer + 1}`).classList.add('winner');
      document.getElementById(`player${activePlayer + 1}`).classList.remove('active');
      gamePlaying = false;
      alert(`${activePlayer === 0 ? player1TitleElement.textContent : player2TitleElement.textContent} a gagné la partie !`);
    } else {
      nextPlayer();
    }
  }
}

// Gérer le clic sur le bouton de lancer
rollButton.addEventListener('click', rollDice);

// Gérer le clic sur le bouton de hold
holdButton.addEventListener('click', holdScore);

// Gérer le clic sur le bouton de nouvelle partie
newGameButton.addEventListener('click', function() {
  document.getElementById(`player${activePlayer + 1}`).classList.remove('winner');
  document.getElementById(`player${activePlayer + 1}`).classList.remove('active');
  init();
});

// Initialiser le jeu au chargement de la page
init();
