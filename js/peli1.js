darkModeCheck();
function darkModeCheck() {
    if (localStorage.getItem("mode") === "dark"){
        document.body.style.background = 'url(images/darkmode.jpg) no-repeat';
        document.body.style.backgroundAttachment = 'fixed';
        document.body.style.backgroundSize = 'cover';
    }
    else {
        document.body.style.background = 'url(images/taustakuva.jpg) no-repeat';
        document.body.style.backgroundAttachment = 'fixed';
        document.body.style.backgroundSize = 'cover';
    }
}


function showGrid(){


  console.log(localStorage.getItem("player0"));
  console.log(localStorage.getItem("player1"));
  console.log(localStorage.getItem("player2"));
  console.log(localStorage.getItem("player3"));
  console.log(localStorage.getItem("player4"));
 let players = [];
 let player;
 let string = '';
  for (let i = 0; i < 9; i++){
    player = localStorage.getItem("player" + i);

    if(player !== null){
      players.push(player);
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

    pelaajaGridItem.innerHTML = players[i];

    gameGrid.appendChild(pelaajaGridItem);
  }
}


showGrid();
