let json;

function getGroup() {
    let group = document.getElementById("group").value;
    let password = document.getElementById("password").value;
    if (group.length == 0 || password.length == 0) {
        alert('Täytä molemmat kentät!');
        return;
    } else {
        let xmlhttp = new XMLHttpRequest();
        console.log("testiä");
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                json = JSON.parse(xmlhttp.responseText);
                if (json.numOfRows > 0){ // something found
                    setGroup(json);
                    console.log("testin tynkää");
                }
                else {
                    alert("Ryhmää ei löytynyt!");

                }

            }
        };
        xmlhttp.open("GET", "https://rocky-cliffs-72708.herokuapp.com/api/login?group=" + group + "&password=" + password, true);
        xmlhttp.send();
    }
}

function setGroup(json) {
    localStorage.setItem("group", json.rows[0].nimi);
    console.log(localStorage.getItem("group"));
    location.href = "menuscreen.html";
}