
function changeDarkmode() {
    document.body.style.background = 'url(images/darkmode.jpg) no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundSize = 'cover';
    changeDarkmodeFont();
    localStorage.setItem("mode", "dark");
    console.log(localStorage.getItem("mode"));
}
function changeLightmode() {
    document.body.style.background = 'url(images/taustakuva.jpg) no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundSize = 'cover';
    changeLightmodeFont();
    localStorage.setItem("mode", "light");
    console.log(localStorage.getItem("mode"));
}
function changeDarkmodeFont() {
    document.getElementsByTagName("h1").item(0).style.color = "white";
}
function changeLightmodeFont() {
    document.getElementsByTagName("h1").item(0).style.color = "black";
}