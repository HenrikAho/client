
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

    td1.setAttribute("id", "savedPlayerTd");
    td2.setAttribute("id", "savedPlayerTd");

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
  else if(textInputCheck(player) === false) {
    alert("Syötä vain kirjaimia!");
  }
  else {
    body = { "pelaajan_nimi": player, "ryhman_nimi": group};
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "https://rocky-cliffs-72708.herokuapp.com/api/newplayer", true);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify(body));
    setTimeout(function(){
      getPlayers();
      document.getElementById("playerfield").value = '';
    }, 1000);
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

function textInputCheck(inputtxt)
//Tekstisyötteen tarkistus
{
  let inputType = /^[A-Za-z0-9äöåÄÖÅ]+$/;
  if(inputtxt.match(inputType))
  {
    return true;
  }
  else
  {
    return false;
  }
}