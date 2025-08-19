// ### 4. Räkna förekomster
// **Problem:** Skriv en funktion som räknar hur många gånger ett specifikt värde förekommer i en array.

// **Indata:** `array: [1, 2, 3, 2, 4, 2, 5], värde: 2`

// **Förväntad utdata:** `3`


const int = [1, 2, 3, 2, 4, 2, 5]

function CountNumbers(array, value) {
    let amount = 0
    for (i = 0; i < array.length; i++) {
        if (array[i] === value) {
            amount += 1
        }
    }
    console.log("Value:", value, "Amount:", amount);
}

CountNumbers(int, 3);





