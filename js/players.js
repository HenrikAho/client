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
function getPlayers() {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      json = JSON.parse(xmlhttp.responseText);
      if (json.numOfRows > 0){ // something found
        showList(json);
        console.log("Pelaajia löytyi")
      }
      else {
        alert("Pelaajia ei löytynyt!");
      }
    }
  };
  xmlhttp.open("GET", "https://rocky-cliffs-72708.herokuapp.com/api/players?group=" + localStorage.getItem("group"), true);
  console.log("testi1");
  xmlhttp.send();
  console.log("testi2");
}

function showList(json) {
  let i;
  let tableRow;
  let td1, td2, checkbox;
  let tableBody;
  let string;
  tableBody = document.getElementById("tBody");
  tableBody.innerHTML = '';

  for (i in json.rows) {
    tableRow = document.createElement("tr");
    td1 = document.createElement("td");
    td2 = document.createElement("td");
    checkbox = document.createElement("input");

    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "checkbox" + i);
    string = json.rows[i].nimi;
    td1.innerHTML = string;

    td2.appendChild(checkbox);

    tableRow.appendChild(td1);
    tableRow.appendChild(td2);

    tableBody.appendChild(tableRow);


  }
  console.log("lista päivittetty");
}


function newPlayer() {
  let player = document.getElementById("playerfield").value;
  let group = localStorage.getItem("group");
  let body;
  if(player === null || player === ""){
    alert('Kirjoita pelaajan nimi!');
  }
  else {
    body = { "pelaajan_nimi": player, "ryhman_nimi": group};
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "https://rocky-cliffs-72708.herokuapp.com/api/newplayer", true);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify(body));
    setTimeout(function(){
      getPlayers();
    }, 500);
  }
}


function startGame() {
  let player;
  let string;
  //Tarkastaa mitkä checkboxit on checkattu
  for (let i = 0; i<9; i++){
    string = "#checkbox" + i;
    if($(string).is(":checked")){
      console.log(i);
      player = json.rows[i].nimi;
      localStorage.setItem("player" + i, player);
    }
    else{
      localStorage.removeItem("player" + i);
    }
  }
  location.href = "peli1.html";

}

getPlayers();