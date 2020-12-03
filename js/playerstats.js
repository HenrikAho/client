let json;

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
    let td1, td2, td3;
    let tableBody;
    let string;

    tableBody = document.getElementById("tableBody");
    console.log(json.rows[0].nimi);
    for (i in json.rows) {
        tableRow = document.createElement("tr");
        td1 = document.createElement("td");
        td2 = document.createElement("td");
        td3 = document.createElement("td");

        string = json.rows[i].nimi;
        td1.innerHTML = string;

        string = json.rows[i].pelatutlkm;
        td2.innerHTML = string;

        string = json.rows[i].voitotlkm;
        td3.innerHTML = string;

        tableRow.appendChild(td1);
        tableRow.appendChild(td2);
        tableRow.appendChild(td3);

        tableBody.appendChild(tableRow);
    }
}