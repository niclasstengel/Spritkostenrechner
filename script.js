function formatPriceInput(inputElement) {
    // Entferne den Dezimalpunkt aus dem eingegebenen Wert
    var actualValue = inputElement.value.replace('.', '');

    // Interpretiere den Wert als Ganzzahl und teile durch 100
    var parsedValue = parseInt(actualValue) / 100;

    // Überprüfe, ob der eingegebene Wert 0 ist
    if (parsedValue === 0 || parsedValue === 0.0) {
        inputElement.value = '0.00';
    } else {
        // Formatieren Sie den Wert mit zwei Dezimalstellen
        inputElement.value = parsedValue.toFixed(2);
    }

    // Fügen Sie die 'input-field'-Klasse wieder hinzu
    inputElement.classList.add('input-field');
}

function formatConsumptionInput(inputElement) {
 // Entferne den Dezimalpunkt aus dem eingegebenen Wert
 var actualValue = inputElement.value.replace('.', '');

 // Interpretiere den Wert als Ganzzahl und teile durch 100
 var parsedValue = parseInt(actualValue) / 10;

 // Überprüfe, ob der eingegebene Wert 0 ist
 if (parsedValue === 0 || parsedValue === 0.0) {
     inputElement.value = '0.0';
 } else {
     // Formatieren Sie den Wert mit zwei Dezimalstellen
     inputElement.value = parsedValue.toFixed(1);
 }

 // Fügen Sie die 'input-field'-Klasse wieder hinzu
 inputElement.classList.add('input-field');
}


function scrollToResults() {
    var resultsContainer = document.getElementById('results');
    resultsContainer.scrollIntoView({ behavior: 'smooth' });
}

function copyToClipboard(value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}

function showNotification(message) {
    var notification = document.getElementById("notification");
    notification.innerText = message;
    notification.style.bottom = "1rem"; // Stellt sicher, dass die Benachrichtigung am unteren Rand erscheint
    setTimeout(function () {
        notification.style.bottom = "-80px"; // Versteckt die Benachrichtigung nach 3 Sekunden
    }, 3000);
}


document.addEventListener("DOMContentLoaded", function () {
    var totalCostElement = document.getElementById("totalCost");
    var personCostElement = document.getElementById("personCost");

    totalCostElement.parentElement.addEventListener("click", function () {
        var totalCostValue = totalCostElement.innerText.replace('€', '').trim();
        copyToClipboard(totalCostValue);
        showNotification("Gesamtpreis wurde kopiert");
    });

    personCostElement.parentElement.addEventListener("click", function () {
        var personCostValue = personCostElement.innerText.replace('€', '').trim();
        copyToClipboard(personCostValue);
        showNotification("Der Preis pro Person wurde kopiert");
    });
});


// Ändere deine calculateCost-Funktion wie folgt
function calculateCost() {
    // Get input values
    var distance = parseFloat(document.getElementById("distance").value.replace(',', '.'));
    var consumption = parseFloat(document.getElementById("consumption").value.replace(',', '.'));
    
    // Hier die Rohdaten (ohne Formatierung) des Preises erhalten
    var rawPrice = document.getElementById("price").value;

    // Konvertiere die Rohdaten in eine Dezimalzahl
    var price = parseFloat(rawPrice);

    // Teile den eingegebenen Wert durch 100 (wie in deinem vorherigen Code)
    price;

    var persons = parseFloat(document.getElementById("persons").value.replace(',', '.'));

    // Überprüfe, ob alle Eingaben gültige Zahlen sind
    if (isNaN(distance) || isNaN(consumption) || isNaN(price) || isNaN(persons)) {
        alert("Bitte fülle alle Felder aus.");
        return;
    }

    // Berechne den Gesamtpreis
    var totalCost = (consumption / 100) * distance * price;

    // Berechne den Preis pro Person
    var personCost = totalCost / persons;

    // Variablen am Anfang der Funktion deklarieren
    var isTotalCostCalculated = !isNaN(totalCost);
    var isPersonCostCalculated = !isNaN(personCost);

    isButtonClicked = true;

    // Zeige die Ergebnisse an
    var totalCostElement = document.getElementById("totalCost");
    var personCostElement = document.getElementById("personCost");
    var resultsContainer = document.getElementById("results");
    var iconButtonContainer = document.getElementById("iconContainer");


    // Überprüfe, ob ein Ergebnis vorhanden ist
    isTotalCostCalculated = !isNaN(totalCost);
    isPersonCostCalculated = !isNaN(personCost);

    resultsContainer.classList.toggle('results-shown', isButtonClicked);
    iconContainer.classList.toggle('iconButtonContainerShow', isButtonClicked);



    // Füge das Euro-Zeichen direkt hinzu, wenn ein Ergebnis vorhanden ist
    totalCostElement.innerText = isTotalCostCalculated ? totalCost.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €" : "";
    personCostElement.innerText = isPersonCostCalculated ? personCost.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €" : "";
    scrollToResults();
}