/**
 * @author Nikke Tikka
 * Asettaa sivun teeman
 */
darkModeCheck();

/**
 * Tarkista valittu teema ja vaihda se tarvittaessa
 */
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