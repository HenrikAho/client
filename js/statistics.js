/*function relocate_stats() {
    let user = 'tummapoika';
    let password = 'rafa';

    if (document.getElementById('kenttaNimi').value.match(user) && document.getElementById('kenttaSalis').value.match(password)) {
        location.href = "playerstats.html";
        return true;
    } else {
        alert('Nimi tai salasana on väärin!');
        return false;
    }
}*/

let json;
let finalGroup;

function getGroup() {
    let group = document.getElementById("group").value;
    let password = document.getElementById("password").value;
    if (group.length == 0 || password.length == 0) {
        alert('Täytä molemmat kentät!');
        return;
    } else {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                json = JSON.parse(xmlhttp.responseText);
                //myFunction(resultArr);
                //document.getElementById("locationInfo").innerHTML = xmlhttp.responseText;
                if (json.numOfRows > 0){ // something found
                    //console.log(json.numOfRows + ", " + json.rows[0].Location_place_name);
                    showList(json);
                }
                else {
                    document.getElementById("locationInfo").innerHTML = "<br/>Ei tapahtumatietoja tältä ajalta.";

                }

            }
        };
        xmlhttp.open("GET", "http://localhost:8080/api/events?start=" + startdate+"&end="+enddate, true);
        xmlhttp.send();
    }
}

function getStats() {

}