let ryhmanNimi;
console.log(localStorage.getItem("group"));
ryhmanNimi = document.getElementById("ryhmanNimi");
ryhmanNimi.innerHTML = "Ryhmä: " + localStorage.getItem("group");
