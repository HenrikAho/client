/**
 * @author Nikke Tikka
 * Sivuston päävalikko
 */
let ryhmanNimi;

console.log(localStorage.getItem("group"));
ryhmanNimi = document.getElementById("ryhmanNimi");
ryhmanNimi.innerHTML = "Ryhmä: <br>" + localStorage.getItem("group");

/**
 * Kirjaudu ulos käyttäjältä ja palaa login-näkymään
 */
function logOut() {
    localStorage.setItem("group", "");
    console.log("Ryhmä nollattu: " + localStorage.getItem("group"));
}

