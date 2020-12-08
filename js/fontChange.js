fontChangeCheck();
function fontChangeCheck() {
    if (localStorage.getItem("mode") === "dark"){
        document.getElementById('asetukset').style.color = 'white';
        document.getElementById('darkmode').style.color = 'white';
        document.getElementById('ryhmanNimi').style.color = 'white';
        document.getElementById('uusiPeli').style.color = 'white';
    }
    else {
        document.getElementById('asetukset').style.color = 'black';
        document.getElementById('darkmode').style.color = 'black';
        document.getElementById('ryhmanNimi').style.color = 'black';
        document.getElementById('uusiPeli').style.color = 'black';
    }
}