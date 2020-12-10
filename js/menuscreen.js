let ryhmanNimi;

console.log(localStorage.getItem("group"));
ryhmanNimi = document.getElementById("ryhmanNimi");
ryhmanNimi.innerHTML = "Ryhmä: <br>" + localStorage.getItem("group");

function logOut() {
    localStorage.setItem("group", "");
    console.log("Ryhmä nollattu: " + localStorage.getItem("group"));
}

