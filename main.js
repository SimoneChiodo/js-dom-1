// Prelevo l'immagine
const bulbImage = document.getElementById("light-bulb");
// Prelevo il pulsante
const bulbButton = document.getElementById("switch-bulb");

// Aggiungo un evento onclick allo switch della lampadina
bulbButton.addEventListener("click", () => {
    //Se è accesa
    if (bulbImage.src.includes("white_lamp")) {
        bulbImage.src = "./img/yellow_lamp.png";
        bulbButton.textContent = "SPEGNI";
    }
    //Se è spenta
    else {
        bulbImage.src = "./img/white_lamp.png";
        bulbButton.textContent = "ACCENDI";
    }
});
