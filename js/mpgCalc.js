function isValid() {
    var isAllDataValid = true;
    var milesBox = document.getElementById("miles");
    var milesDriven = milesBox.value;
    var gallonsBox = document.getElementById("gallons");
    var gallonsUsed = milesBox.value;
    if (milesDriven == "" || isNaN(parseFloat(milesDriven)) && gallonsUsed == "" || isNaN(parseFloat(gallonsUsed))) {
        isAllDataValid = false;
        milesBox.nextElementSibling.innerHTML =
            "Miles Driven is required and must be a number!";
        gallonsBox.nextElementSibling.innerHTML =
            "Gallons Used is required and must be a number!";
    }
    return isAllDataValid;
}
window.onload = function () {
    var calcBtn = document.getElementById("calculate");
    calcBtn.onclick = main;
    var clearBtn = document.getElementById("clear");
    clearBtn.onclick = resetForm;
    var clearMilesBox = document.getElementById("miles");
    clearMilesBox.ondblclick = resetBox;
    var clearGallonsBox = document.getElementById("gallons");
    clearGallonsBox.ondblclick = resetBox;
};
function main() {
    if (isValid()) {
        var miles = document.getElementById("miles");
        var milesData = miles.value;
        var gallons = document.getElementById("gallons");
        var gallonsData = gallons.value;
        var mpg = calculateMPG(parseFloat(milesData), parseFloat(gallonsData));
        displayResults(mpg);
    }
}
function displayResults(milesPerGallon) {
    var mpgBox = document.getElementById("mpg");
    mpgBox.value = milesPerGallon.toString();
}
function calculateMPG(milesDriven, gallonsUsed) {
    var mpg = milesDriven / gallonsUsed;
    return mpg;
}
function resetForm() {
    var allBoxes = document.querySelectorAll("input[type = text]");
    for (var i = 0; i < allBoxes.length; i++) {
        var currBox = allBoxes[i];
        currBox.value = "";
    }
    var allSpans = document.querySelectorAll("span");
    for (var i = 0; i < allSpans.length; i++) {
        var currSpan = allSpans[i];
        currSpan.innerHTML = "*";
    }
}
function resetBox() {
    var allBoxes = document.querySelectorAll("input[type = text]");
    for (var i = 0; i < 2; i++) {
        var currBox = allBoxes[i];
        currBox.value = "";
    }
}
