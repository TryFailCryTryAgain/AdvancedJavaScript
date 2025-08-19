// ### 4. Räkna förekomster
// **Problem:** Skriv en funktion som räknar hur många gånger ett specifikt värde förekommer i en array.

// **Indata:** `array: [1, 2, 3, 2, 4, 2, 5], värde: 2`

// **Förväntad utdata:** `3`


const int = [1, 2, 3, 2, 4, 2, 5]
const ints = [1, 2]

let total = 0
let prev = 0

function checkValue(item) {
    if (item != prev && total == 0) {
        prev = item
        total += 1
    } else if (item != prev && total != 0 ) {
        total -= 1
    } else if (item == prev) {
        total += 1
    }
}

// Failed loop, gotta check thru it again

ints.forEach(checkValue);
console.log(total, prev);