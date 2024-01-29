function priceCalculator() {
    document.getElementById("price-container").style.display = "block";

    const nKm = parseInt(prompt("Quanti km vuoi percorrere?"));

    if (isNaN(nKm)) {
        document.getElementById("output").innerHTML = "Il valore dei km da te inserito è scorretto. Ricomincia da capo.";
        return;
    }


    const eta = parseInt(prompt("Quanti anni ha il passeggero?"));

    if (isNaN(eta)) {
        document.getElementById("output").innerHTML = "Il valore di età da te inserito è scorretto. Ricomincia da capo.";
        return;
    }
}