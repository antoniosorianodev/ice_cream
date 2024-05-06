"use strict"

window.onload = function () {
    let coneRadio = document.querySelector("#coneRadio");
    let cupRadio = document.querySelector("#cupRadio");

    document.querySelector("#toppingsLabel").style.display = "none";
    document.querySelector("#toppingsSection").style.display = "none";

    iceCreamForm.addEventListener("submit", costCalculator);

    // My very soul wants to believe the bottom two lines can be done in one
    // I however am not good/knowledgeable enough to know if this is true
    coneRadio.addEventListener("click", hideAndSeek);
    cupRadio.addEventListener("click", hideAndSeek);
}

function costCalculator(event) {
    event.preventDefault();

    // saving a pointer to the html form element for later use
    let iceCreamForm = event.target;

    let baseCost = 0;
    let numberOfScoops = iceCreamForm.scoopsNumber.value;

    let scoopCost = ((1.25 * (numberOfScoops - 1)) + 2.25);
    baseCost += scoopCost

    let toppingsCost = 0;
    if (document.querySelector("#cupRadio").checked) {
        if (iceCreamForm.sprinkles.checked) {
            toppingsCost += 0.50;
        }
        if (iceCreamForm.whippedCream.checked) {
            toppingsCost += 0.25;
        }
        if (iceCreamForm.hotFudge.checked) {
            toppingsCost += 1.25;
        }
        if (iceCreamForm.cherry.checked) {
            toppingsCost += 0.25;
        }
    }
    baseCost += toppingsCost;
    // changed tax rate to 7% instead of 8.25%
    let taxAmount = baseCost * 0.07;
    let totalCost = baseCost + taxAmount;

    document.querySelector("#baseDiv").innerHTML = `Base price: $${baseCost.toFixed(2)}`;
    document.querySelector("#taxDiv").innerHTML = `Tax: $${taxAmount.toFixed(2)}`;
    document.querySelector("#totalDiv").innerHTML = `Total due: $${totalCost.toFixed(2)}`;

    console.log(`Cost of Scoops: ${scoopCost}
    Cost of Toppings: ${toppingsCost}
    Total: ${totalCost}
    `)
}

function hideAndSeek() {
    if (document.querySelector("#cupRadio").checked) {
        document.querySelector("#toppingsLabel").style.display = "block";
        document.querySelector("#toppingsSection").style.display = "block";
    } else {
        document.querySelector("#toppingsLabel").style.display = "none";
        document.querySelector("#toppingsSection").style.display = "none";
    }
}