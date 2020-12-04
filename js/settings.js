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