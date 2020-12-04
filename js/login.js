let json;
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
                    console.log("Ryhmä haettu: " + json.nimi);
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
function newGroup() {
    let group = document.getElementById("group").value;
    let password = document.getElementById("password").value;
    let body;
    if (group.length == 0 || password.length == 0) {
        alert('Täytä molemmat kentät!');
        return;
    } else {
        let pwCheck = window.prompt("Vahvista salasana:");
        if(password !== pwCheck){
            alert("Salasana ei täsmää!");
            return;
        }
        else {
            body = { "nimi": group, "salasana": password};
            let xmlhttp = new XMLHttpRequest();
            xmlhttp.open("POST", "https://rocky-cliffs-72708.herokuapp.com/api/newgroup", true);
            xmlhttp.setRequestHeader("Content-Type", "application/json");
            xmlhttp.send(JSON.stringify(body));
            localStorage.setItem("group", body.nimi);
            console.log(localStorage.getItem("group"));

            setTimeout(function(){
                location.href = "menuscreen.html";
            }, 1000);

        }
    }
}