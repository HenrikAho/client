
let players = [];
let scores = [];
let strikes = [];
let playerLost = [];
let currentPlayer = 0;

let peliOhje = document.getElementById("peliOhje");
showStartGrid();




function showStartGrid(){
 let player;
 let string = '';
  for (let i = 0; i < 9; i++){
    player = localStorage.getItem("player" + i);

    if(player !== null){
      players.push(player);
      scores.push(0);
      strikes.push(0);
      playerLost.push(false);
      string = string + "auto ";
    }

  }

  //Laittaa oikean määrään columneja
  let gameGrid = document.getElementById("gameGrid");
  gameGrid.style.gridTemplateColumns = string;

  let pelaajaGridItem;
  for(let i = 0; i < players.length; i++){
    pelaajaGridItem = document.createElement("div");
    pelaajaGridItem.setAttribute("class", "grid-item");
    pelaajaGridItem.setAttribute("id", "playerName" + i);

    pelaajaGridItem.innerHTML = players[i];

    gameGrid.appendChild(pelaajaGridItem);
  }
  peliOhje.innerHTML = "Anna pelaajan " + players[0] + " tulos.";
}

function updateScore(playerToUpdate, result) {

  if (result === 0){
    strikes[playerToUpdate]++;
  }else{
    scores[playerToUpdate] += result;
  }
  let nameGrid = document.getElementById("playerName" + playerToUpdate);
  nameGrid.innerHTML = players[playerToUpdate] + " <b>(" + scores[playerToUpdate] + ")</b>";

  if(scores[playerToUpdate] === 50){
    winnerIsFound = true;
  }
  else if(scores[playerToUpdate] > 50){
    scores[playerToUpdate] = 25;
  }
  else if(strikes[playerToUpdate] >= 3){
    playerLost[playerToUpdate] = true;
  }

}

function addResult(){
  let tulosItem;
  let tulos;
  let gameGrid;

  tulos = document.getElementById("resultfield").value;
  if(tulos.length == 0){
    alert("Anna tulos! (0-12)");
    }
  else if(tulos > 12 || tulos < 0){
    alert("Anna tulos väliltä 0-12!");
  }
  else {
    tulos = parseInt(tulos);
    gameGrid = document.getElementById("gameGrid");
    tulosItem = document.createElement("div");
    tulosItem.setAttribute("class", "grid-item");
    tulosItem.innerHTML = tulos;
    gameGrid.appendChild(tulosItem);
    updateScore(currentPlayer, tulos);
    currentPlayer++;
    if (currentPlayer === players.length) {
      currentPlayer = 0;
    }

  }

  if(playerLost[currentPlayer] === true){
    gameGrid = document.getElementById("gameGrid");
    tulosItem = document.createElement("div");
    tulosItem.setAttribute("class", "grid-item");
    tulosItem.innerHTML = "X";
    gameGrid.appendChild(tulosItem);

    currentPlayer++;
    if (currentPlayer === players.length) {
      currentPlayer = 0;
    }
  }
}

let winnerIsFound = false;
while(winnerIsFound){

}








