function getPlayers() {
  let xmlhttp = new XMLHttpRequest();
  console.log("testiä");
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      json = JSON.parse(xmlhttp.responseText);
      if (json.numOfRows > 0){ // something found
        showList(json);
        console.log("pelaajia löytyi");
      }
      else {
        alert("Pelaajia ei löytynyt!");

      }

    }
  };
  xmlhttp.open("GET", "https://rocky-cliffs-72708.herokuapp.com/api/players?group=" + localStorage.getItem("group"), true);
  xmlhttp.send();
}

function showList(json) {
  let i;
  let tableRow;
  let td1, td2, checkbox;
  let tableBody;
  let string;

  tableBody = document.getElementById("tBody");
  console.log(json.rows[0].nimi);
  for (i in json.rows) {
    tableRow = document.createElement("tr");
    td1 = document.createElement("td");
    td2 = document.createElement("td");
    checkbox = document.createElement("input");

    checkbox.setAttribute("type", "checkbox");

    string = json.rows[i].nimi;
    td1.innerHTML = string;

    td2.appendChild(checkbox);



    tableRow.appendChild(td1);
    tableRow.appendChild(td2);

    tableBody.appendChild(tableRow);
  }
}
getPlayers();