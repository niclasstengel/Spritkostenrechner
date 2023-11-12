var isButtonClicked = false;

function scrollToResults() {
    var resultsContainer = document.getElementById('results');
    resultsContainer.scrollIntoView({ behavior: 'smooth' });
}

function formatPriceInput(inputElement) {
    var value = inputElement.value.replace(',', '.');

    // Füge das Komma ein, wenn die erste Ziffer eingegeben wird
    if (value.length === 1) {
        inputElement.value = '0' + value;
    } else if (value.length > 1) {
        // Füge das Komma ein, wenn mehr als eine Ziffer vorhanden ist
        inputElement.value = value.slice(0, -2) + '.' + value.slice(-2);
    }
}


function calculateCost() {
    // Get input values
    var distance = parseFloat(document.getElementById("distance").value.replace(',', '.'));
    var consumption = parseFloat(document.getElementById("consumption").value.replace(',', '.'));
    var priceInput = document.getElementById("price");
    formatPriceInput(priceInput);
    var price = parseFloat(priceInput.value.replace(',', '.'));
    var persons = parseFloat(document.getElementById("persons").value.replace(',', '.'));

    // Check if any input is empty
    if (distance === "" || consumption === "" || price === "") {
        alert("Bitte fülle alle Felder aus.");
        return;
    }

    // Calculate total cost
    var totalCost = (consumption / 100) * distance * price;

    // Calculate cost per person
    var personCost = totalCost / persons;

    // Variablen am Anfang der Funktion deklarieren
    var isTotalCostCalculated = totalCost !== undefined && !isNaN(totalCost);
    var isPersonCostCalculated = personCost !== undefined && !isNaN(personCost);

    isButtonClicked = true;

    // Display results
    var totalCostElement = document.getElementById("totalCost");
    var personCostElement = document.getElementById("personCost");
    var resultsContainer = document.getElementById("results");

    // Überprüfe, ob ein Ergebnis vorhanden ist
    isTotalCostCalculated = totalCost !== undefined && !isNaN(totalCost);
    isPersonCostCalculated = personCost !== undefined && !isNaN(personCost);

    resultsContainer.classList.toggle('results-shown', isButtonClicked);

    // Füge das Euro-Zeichen direkt hinzu, wenn ein Ergebnis vorhanden ist
    totalCostElement.innerText = isTotalCostCalculated ? totalCost.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €" : "";
    personCostElement.innerText = isPersonCostCalculated ? personCost.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €" : "";
    scrollToResults();
}

// Füge das Formatieren-Event für das Price-Input hinzu
var priceInput = document.getElementById("price");
priceInput.addEventListener('input', function () {
    formatPriceInput(priceInput);
});
