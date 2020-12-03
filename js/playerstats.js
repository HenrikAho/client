let json;
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

//----------------------------------------------------------------------------------------------

function getPlayerStats() {
    let xmlhttp = new XMLHttpRequest();
    console.log("testiä");
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            json = JSON.parse(xmlhttp.responseText);
            if (json.numOfRows > 0){ // something found
                showPlayer(json);
                console.log("pelaajia löytyi");
            }
            else {
                alert("Pelaajia ei löytynyt!");

            }

        }
    };
    xmlhttp.open("GET", "https://rocky-cliffs-72708.herokuapp.com/api/player?group=" + localStorage.getItem("group") + "&player=Onni", true);
    xmlhttp.send();
}

function showPlayer(json) {
    let td1, td2, td3, td4, td5, td6, td7;
    let string;
    let pelaaja;
    let heitotlkm = (json.rows[0].p0 + json.rows[0].p1 + json.rows[0].p2 + json.rows[0].p3 + json.rows[0].p4 + json.rows[0].p5 +
        json.rows[0].p6 + json.rows[0].p7 + json.rows[0].p8 + json.rows[0].p9 + json.rows[0].p10 + json.rows[0].p11 +
        json.rows[0].p12);

    let voittoprosentti = (json.rows[0].voitotlkm / json.rows[0].pelatutlkm) * 100;
    let osumatarkkuus = ((json.rows[0].p1 + json.rows[0].p2 + json.rows[0].p3 + json.rows[0].p4 + json.rows[0].p5 +
        json.rows[0].p6 + json.rows[0].p7 + json.rows[0].p8 + json.rows[0].p9 + json.rows[0].p10 + json.rows[0].p11 +
        json.rows[0].p12) / (json.rows[0].p0 + json.rows[0].p1 + json.rows[0].p2 + json.rows[0].p3 + json.rows[0].p4 + json.rows[0].p5 +
        json.rows[0].p6 + json.rows[0].p7 + json.rows[0].p8 + json.rows[0].p9 + json.rows[0].p10 + json.rows[0].p11 +
        json.rows[0].p12)) * 100;

    let pistekeskiarvo = (json.rows[0].p0 + json.rows[0].p1 + json.rows[0].p2 * 2 + json.rows[0].p3 * 3 + json.rows[0].p4 * 4 + json.rows[0].p5 * 5 +
        json.rows[0].p6 * 6 + json.rows[0].p7 * 7 + json.rows[0].p8 * 8 + json.rows[0].p9 * 9 + json.rows[0].p10 * 10 + json.rows[0].p11 * 11 +
        json.rows[0].p12 * 12) / heitotlkm;

        td1 = document.getElementById("td1");
        td2 = document.getElementById("td2");
        td3 = document.getElementById("td3");
        td4 = document.getElementById("td4");
        td5 = document.getElementById("td5");
        td6 = document.getElementById("td6");
        td7 = document.getElementById("td7");

        string = json.rows[0].nimi;
        td1.innerHTML = string;

        string = json.rows[0].pelatutlkm;
        td2.innerHTML = string;

        string = json.rows[0].voitotlkm;
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