var isButtonClicked = false;

function calculateCost() {
    // Get input values
    var distance = parseFloat(document.getElementById("distance").value.replace(',', '.'));
    var consumption = parseFloat(document.getElementById("consumption").value.replace(',', '.'));
    var price = parseFloat(document.getElementById("price").value.replace(',', '.'));
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
}





