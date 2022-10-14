/**
 * Checks if form data is valid
 * @returns Returns true is all data is valid on the form, or false is something is invalid
 */
function isValid():boolean{
    let isAllDataValid = true;

    // validate miles driven, integer equals true, anything else is false.
    let milesBox:HTMLInputElement = 
        <HTMLInputElement>document.getElementById("miles");
    let milesDriven:string = milesBox.value;

    let gallonsBox:HTMLInputElement = 
        <HTMLInputElement>document.getElementById("gallons");
    let gallonsUsed:string = milesBox.value;

    if (milesDriven == "" || isNaN(parseFloat(milesDriven)) && gallonsUsed == "" || isNaN(parseFloat(gallonsUsed))) {
        isAllDataValid = false;

        milesBox.nextElementSibling.innerHTML = 
            "Miles Driven is required and must be a number!"

        gallonsBox.nextElementSibling.innerHTML =
            "Gallons Used is required and must be a number!"
    }


    return isAllDataValid;
}

/** 
 * This function should be called when the calculate button is clicked
*/

window.onload = function() {
    let calcBtn:HTMLElement  = 
        <HTMLElement>document.getElementById("calculate");
    calcBtn.onclick = main;

    let clearBtn:HTMLElement = document.getElementById("clear");
    clearBtn.onclick = resetForm;

    let clearMilesBox:HTMLElement = document.getElementById("miles");
    clearMilesBox.ondblclick = resetBox;

    let clearGallonsBox:HTMLElement = document.getElementById("gallons");
    clearGallonsBox.ondblclick = resetBox;
}

function main(){
    if (isValid()) {
        let miles:HTMLInputElement = 
            <HTMLInputElement>document.getElementById("miles");
        let milesData = miles.value;

        let gallons:HTMLInputElement = 
            <HTMLInputElement>document.getElementById("gallons");
        let gallonsData = gallons.value;

        let mpg = calculateMPG(parseFloat(milesData), parseFloat(gallonsData));
        displayResults(mpg);
    }
}

/**
 * Displays given MPG on the form
 * @param milesPerGallon Number containing the miles per gallon
 */
function displayResults(milesPerGallon:number){
    // (<HTMLInputElement>document.getElementById("mpg")).value =
    //     milesPerGallon.toString();
    
    //display the MPG result in a text box
    let mpgBox:HTMLInputElement = 
        <HTMLInputElement>document.getElementById("mpg");
    mpgBox.value = milesPerGallon.toString();
}

/**
 * Calculates miles per gallon
 * @param milesDriven The number of miles driven
 * @param gallonsUsed The number of gallons used
 */
function calculateMPG(milesDriven:number, gallonsUsed:number):number{
    let mpg:number = milesDriven / gallonsUsed;
    return mpg;
}

function resetForm():void {
    // clear out all textboxes
    let allBoxes = document.querySelectorAll("input[type = text]");
    for (let i = 0; i < allBoxes.length; i++) {
        let currBox = <HTMLInputElement>allBoxes[i];
        currBox.value = "";
    }

    //reset spans/error messages
    let allSpans = document.querySelectorAll("span");
    for (let i = 0; i < allSpans.length; i++) {
        let currSpan = <HTMLInputElement>allSpans[i];
        currSpan.innerHTML = "*";
    }
}

// Will rest gallons used, and miles driven if form box is double clicked
function resetBox() {
    let allBoxes = document.querySelectorAll("input[type = text]");
    for (let i = 0; i < 2; i++) {
        let currBox = <HTMLInputElement>allBoxes[i];
        currBox.value = "";
    }

}

