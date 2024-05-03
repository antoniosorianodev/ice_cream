// ONLY CUPS CAN HAVE TOPPINGS, FIX THIS LATER
// ONLY CUPS CAN HAVE TOPPINGS, FIX THIS LATER
// ONLY CUPS CAN HAVE TOPPINGS, FIX THIS LATER
// ONLY CUPS CAN HAVE TOPPINGS, FIX THIS LATER
// ONLY CUPS CAN HAVE TOPPINGS, FIX THIS LATER
// ONLY CUPS CAN HAVE TOPPINGS, FIX THIS LATER
// ONLY CUPS CAN HAVE TOPPINGS, FIX THIS LATER

"use strict"


window.onload = function () {
    iceCreamForm.addEventListener("submit", costCalculator);
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
    if (iceCreamForm.sprinkles.checked) {
        toppingsCost += 0.05;
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
    baseCost += toppingsCost;
    let taxAmount = baseCost * 0.0825;
    let totalCost = baseCost + taxAmount;

    document.querySelector("#baseDiv").innerHTML = `Base price: $${baseCost.toFixed(2)}`;
    document.querySelector("#taxDiv").innerHTML = `Tax: $${taxAmount.toFixed(2)}`;
    document.querySelector("#totalDiv").innerHTML = `Total due: $${totalCost.toFixed(2)}`;

    console.log(`Cost of Scoops: ${scoopCost}
    Cost of Toppings: ${toppingsCost}
    Total: ${totalCost}
    `)
}

// if (theForm.holder.value === "yes") {
//     document.querySelector("#toppingsSection").style.display = "none";
// } else {
//     document.querySelector("#toppingsSection").style.display = "block";
// }