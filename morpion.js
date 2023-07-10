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

var currentPlayer = 1;
var player1Name = "";
var player2Name = "";
var winnerMessages = [
  "Humm... j'ai gagné !",
  "Je dis OUI OUI OUI OUI !",
  "Le Mbappé du morpion c'est moi !",
  "C'est qui le patron? C'est moi le patron !",
  "Je t'ai giflé comme un enfant têtue!",
];
var drawMessage = [
  "Match nul ! Personne n'a gagné.",
  "Vous êtes trop fort tout les deux ou bien??",
  "Bien jouer on recommence?",
];

var cells = document.querySelectorAll('.cell');
var startButton = document.getElementById('start-button');
var player1Input = document.getElementById('player1');
var player2Input = document.getElementById('player2');

startButton.addEventListener('click', function () {
  player1Name = player1Input.value || "Joueur 1";
  player2Name = player2Input.value || "Joueur 2";
  startGame();
});

function startGame() {
  currentPlayer = 1;
  cells.forEach(function (cell) {
    cell.textContent = "";
    cell.addEventListener('click', cellClickHandler);
  });
}

function cellClickHandler() {
  if (this.textContent === "") {
    if (currentPlayer === 1) {
      this.textContent = "X";
      this.classList.add("player1");
      currentPlayer = 2;
    } else {
      this.textContent = "O";
      this.classList.add("player2");
      currentPlayer = 1;
    }

    if (checkWin()) {
      var randomIndex = Math.floor(Math.random() * winnerMessages.length);
      var winnerMessage = winnerMessages[randomIndex];
      var winnerName = currentPlayer === 1 ? player2Name : player1Name;
      alert(winnerMessage + " " + winnerName + " a gagné !");
      endGame();
    } else if (checkDraw()) {
      alert(drawMessage);
      endGame();
    }
  }
}

function checkWin() {
  var winCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Lignes
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colonnes
    [0, 4, 8], [2, 4, 6] // Diagonales
  ];

  for (var i = 0; i < winCombinations.length; i++) {
    var combo = winCombinations[i];
    if (
      cells[combo[0]].textContent !== "" &&
      cells[combo[0]].textContent === cells[combo[1]].textContent &&
      cells[combo[1]].textContent === cells[combo[2]].textContent
    ) {
      return true;
    }
  }

  return false;
}

function checkDraw() {
  var isDraw = true;
  cells.forEach(function (cell) {
    if (cell.textContent === "") {
      isDraw = false;
      return;
    }
  });
  return isDraw;
}

function endGame() {
  cells.forEach(function (cell) {
    cell.removeEventListener('click', cellClickHandler);
  });
}
