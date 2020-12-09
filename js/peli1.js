
let players = [];
let scores = [];
let strikes = [];
let playerLost = [];
let currentPlayer = 0;
let roundCounter = 1;
let resultGrid = document.getElementById("resultGrid");
let peliOhje = document.getElementById("peliOhje");
showStartGrid();




function showStartGrid(){
 let player;
 let string = '';
 let playerAmount = parseInt(localStorage.getItem("playerAmount"));

  for (let i = 0; i < playerAmount; i++){
    player = localStorage.getItem("player" + i);

    if(player !== null){
      players.push(player);
      scores.push(0);
      strikes.push(0);
      playerLost.push(false);

    }

  }
  console.log(players.length);
  let columnString = 100/players.length;
  for(let i = 0; i < players.length; i++){
    string += columnString + "% ";
  }

  //Laittaa oikean määrään columneja
  let gameGrid = document.getElementById("gameGrid");
  gameGrid.style.gridTemplateColumns = string;
  resultGrid.style.gridTemplateColumns = string;

  let pelaajaGridItem;
  let pelaajaResultItem ;

  for(let i = 0; i < players.length; i++){
    pelaajaGridItem = document.createElement("div");
    pelaajaGridItem.setAttribute("class", "grid-item");
    pelaajaGridItem.setAttribute("id", "playerName" + i);

    pelaajaResultItem = document.createElement("div");
    pelaajaResultItem.setAttribute("class", "grid-item");
    pelaajaResultItem.setAttribute("id", "playerResult" + i);

    pelaajaGridItem.innerHTML = players[i];
    pelaajaResultItem.innerHTML = "0";

    gameGrid.appendChild(pelaajaGridItem);
    resultGrid.appendChild(pelaajaResultItem);
  }
  peliOhje.innerHTML = "Anna pelaajan " + players[0] + " tulos";
}

function updateScore(playerToUpdate, result) {

  if (result === 0){
    strikes[playerToUpdate]++;
  }else{
    scores[playerToUpdate] += result;
  }

  if(scores[playerToUpdate] === 50){
    winnerFound();
  }
  else if(scores[playerToUpdate] > 50){
    scores[playerToUpdate] = 25;
  }
  else if(strikes[playerToUpdate] >= 3){
    playerLost[playerToUpdate] = true;
  }
  let resultGridItem = document.getElementById("playerResult" + playerToUpdate);
  resultGridItem.innerHTML = "<b>(" + scores[playerToUpdate] + ")";




}

function addResult(){
  let tulosItem;
  let tulos;
  let gameGrid;

  tulos = document.getElementById("resultfield").value;
  if(tulos.length === 0){
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
    tulosItem.setAttribute("id","resultGrid" + roundCounter + currentPlayer);
    tulosItem.innerHTML = tulos;
    gameGrid.appendChild(tulosItem);
    updateScore(currentPlayer, tulos);
    document.getElementById("resultfield").value = "";
    currentPlayer++;
    if (currentPlayer === players.length) {
      currentPlayer = 0;
      roundCounter++;
    }

  }
  while(playerLost[currentPlayer] === true){
    gameGrid = document.getElementById("gameGrid");
    tulosItem = document.createElement("div");
    tulosItem.setAttribute("class", "grid-item");
    tulosItem.innerHTML = "X";
    gameGrid.appendChild(tulosItem);

    currentPlayer++;
    if (currentPlayer === players.length) {
      currentPlayer = 0;
      roundCounter++;
    }
  }
  peliOhje.innerHTML = "Anna pelaajan " + players[currentPlayer] + " tulos";
  gameGrid.scrollTop = gameGrid.scrollHeight;
}

function endGame(){
  location.href = "menuscreen.html";
}


function winnerFound(){
  alert(players[currentPlayer] + " voitti pelin!");
  document.getElementById("peliOhje").remove();
  document.getElementById("resultDiv").remove();
}


function saveGame(){
  let group = localStorage.getItem("group");
  let resultGrid;
  let body = {};
  let value;
  console.log("tallenna painettu");

  for(let i = 0; i < players.length; i++) {
    let tempPlayer = "pelaaja" + (i + 1);
    let p0 = 0, p1 = 0, p2 = 0, p3 = 0, p4 = 0, p5 = 0, p6 = 0, p7 = 0, p8 = 0, p9 = 0, p10 = 0, p11 = 0, p12 = 0;

    for (let x = 1; x <= roundCounter; x++) {
      resultGrid = document.getElementById("resultGrid" + x + i);
      if(resultGrid == null || resultGrid.innerText === "X"){
        break;
      }
      else{
        value = parseInt(resultGrid.innerText);
        switch (value) {
          case 0:
            p0++;
            break;
          case 1:
            p1++;
            break;
          case 2:
            p2++;
            break;
          case 3:
            p3++;
            break;
          case 4:
            p4++;
            break;
          case 5:
            p5++;
            break;
          case 6:
            p6++;
            break;
          case 7:
            p7++;
            break;
          case 8:
            p8++;
            break;
          case 9:
            p9++;
            break;
          case 10:
            p10++;
            break;
          case 11:
            p11++;
            break;
          case 12:
            p12++;
            break;
        }
      }
    }

    body[tempPlayer] =
          {
            "nimi": players[i],
            "p0": p0,
            "p1": p1,
            "p2": p2,
            "p3": p3,
            "p4": p4,
            "p5": p5,
            "p6": p6,
            "p7": p7,
            "p8": p8,
            "p9": p9,
            "p10": p10,
            "p11": p11,
            "p12": p12
          };
    console.log("pelaaja tallennettu objektiin");
    }


  body["ryhman_nimi"] = group;
  body["voittajan_nimi"] = players[currentPlayer];

  let today = new Date();
  let pvm = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  body["pvm"] = pvm;


  console.log(body);

  let xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", "https://rocky-cliffs-72708.herokuapp.com/api/newgame", true);
  xmlhttp.setRequestHeader("Content-Type", "application/json");
  xmlhttp.send(JSON.stringify(body));
  alert("Peli tallennettu!");

  setTimeout(function(){
    location.href = "menuscreen.html";
  }, 1000);





}












