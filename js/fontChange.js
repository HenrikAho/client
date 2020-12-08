fontChangeCheck();
function fontChangeCheck() {
    if (localStorage.getItem("mode") === "dark"){
        document.getElementsByTagName("h1").item(0).style.color = "white";
    }
    else {
        document.getElementsByTagName("h1").item(0).style.color = "black";
    }
}