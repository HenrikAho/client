let json;
let tuloksetJSON;
getPlayers();
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
    for (i in json.rows) {
        tableRow = document.createElement("tr");
        tableRow.id = i;
        tableRow.setAttribute("data-toggle", "modal");
        tableRow.setAttribute("data-target", "#myModal");
        tableRow.setAttribute("onclick", "getPlayerStats()");
        tableRow.onclick = function (){getPlayerStats(this.id)};
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

//----------------------------------------------------------------------------------------------

function getPlayerStats(id) {
    let xmlhttp = new XMLHttpRequest();
    console.log("Pelaajan tiedot haetaan id: " + id);
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            if (json.numOfRows > 0){ // something found
                tuloksetJSON = JSON.parse(xmlhttp.responseText);
                showPlayer(tuloksetJSON);
                console.log("pelaaja löytyi:" + id);
            }
            else {
                alert("Pelaajia ei löytynyt!");
            }
        }
    };
    xmlhttp.open("GET", "https://rocky-cliffs-72708.herokuapp.com/api/player?group=" + localStorage.getItem("group") + "&player=" + json.rows[id].nimi, true);
    xmlhttp.send();
}

function showPlayer(tuloksetJSON) {
    let td1, td2, td3, td4, td5, td6, td7;
    let string;
    let pelaaja;
    let heitotlkm = (tuloksetJSON.rows[0].p0 + tuloksetJSON.rows[0].p1 + tuloksetJSON.rows[0].p2 + tuloksetJSON.rows[0].p3 + tuloksetJSON.rows[0].p4 + tuloksetJSON.rows[0].p5 +
        tuloksetJSON.rows[0].p6 + tuloksetJSON.rows[0].p7 + tuloksetJSON.rows[0].p8 + tuloksetJSON.rows[0].p9 + tuloksetJSON.rows[0].p10 + tuloksetJSON.rows[0].p11 +
        tuloksetJSON.rows[0].p12);

    let voittoprosentti = (tuloksetJSON.rows[0].voitotlkm / tuloksetJSON.rows[0].pelatutlkm) * 100;
    let osumatarkkuus = ((tuloksetJSON.rows[0].p1 + tuloksetJSON.rows[0].p2 + tuloksetJSON.rows[0].p3 + tuloksetJSON.rows[0].p4 + tuloksetJSON.rows[0].p5 +
        tuloksetJSON.rows[0].p6 + tuloksetJSON.rows[0].p7 + tuloksetJSON.rows[0].p8 + tuloksetJSON.rows[0].p9 + tuloksetJSON.rows[0].p10 + tuloksetJSON.rows[0].p11 +
        tuloksetJSON.rows[0].p12) / (tuloksetJSON.rows[0].p0 + tuloksetJSON.rows[0].p1 + tuloksetJSON.rows[0].p2 + tuloksetJSON.rows[0].p3 + tuloksetJSON.rows[0].p4 + tuloksetJSON.rows[0].p5 +
        tuloksetJSON.rows[0].p6 + tuloksetJSON.rows[0].p7 + tuloksetJSON.rows[0].p8 + tuloksetJSON.rows[0].p9 + tuloksetJSON.rows[0].p10 + tuloksetJSON.rows[0].p11 +
        tuloksetJSON.rows[0].p12)) * 100;

    let pistekeskiarvo = (tuloksetJSON.rows[0].p0 + tuloksetJSON.rows[0].p1 + tuloksetJSON.rows[0].p2 * 2 + tuloksetJSON.rows[0].p3 * 3 + tuloksetJSON.rows[0].p4 * 4 + tuloksetJSON.rows[0].p5 * 5 +
        tuloksetJSON.rows[0].p6 * 6 + tuloksetJSON.rows[0].p7 * 7 + tuloksetJSON.rows[0].p8 * 8 + tuloksetJSON.rows[0].p9 * 9 + tuloksetJSON.rows[0].p10 * 10 + tuloksetJSON.rows[0].p11 * 11 +
        tuloksetJSON.rows[0].p12 * 12) / heitotlkm;

        td1 = document.getElementById("td1");
        td2 = document.getElementById("td2");
        td3 = document.getElementById("td3");
        td4 = document.getElementById("td4");
        td5 = document.getElementById("td5");
        td6 = document.getElementById("td6");
        td7 = document.getElementById("td7");

        string = tuloksetJSON.rows[0].nimi;
        td1.innerHTML = string;

        string = tuloksetJSON.rows[0].pelatutlkm;
        td2.innerHTML = string;

        string = tuloksetJSON.rows[0].voitotlkm;
        td3.innerHTML = string;

        string = voittoprosentti.toFixed(1) + "%";
        td4.innerHTML = string;

        string = heitotlkm;
        td5.innerHTML = string;

        string = osumatarkkuus.toFixed(1) + "%";
        td6.innerHTML = string;

        string = pistekeskiarvo.toFixed(1) + "p";
        td7.innerHTML = string;

}