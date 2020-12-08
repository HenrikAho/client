
function changeDarkmode() {
    document.body.style.background = 'url(images/darkmode.jpg) no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundSize = 'cover';
    localStorage.setItem("mode", "dark");
    console.log(localStorage.getItem("mode"));
}
function changeLightmode() {
    document.body.style.background = 'url(images/taustakuva.jpg) no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundSize = 'cover';
    localStorage.setItem("mode", "light");
    console.log(localStorage.getItem("mode"));
}
function changeDarkmodeFont() {
    document.getElementById('asetukset').style.color = 'white';
    document.getElementById('darkmode').style.color = 'white';
    document.getElementById('ryhmanNimi').style.color = 'white';
    document.getElementById('uusiPeli').style.color = 'white';
    localStorage.setItem("mode", "dark");
    console.log(localStorage.getItem("mode"));

}
function changeLightmodeFont() {
    document.getElementById('asetukset').style.color = 'black';
    document.getElementById('darkmode').style.color = 'black';
    document.getElementById('ryhmanNimi').style.color = 'black';
    document.getElementById('uusiPeli').style.color = 'black';
    localStorage.setItem("mode", "light");
    console.log(localStorage.getItem("mode"));
}