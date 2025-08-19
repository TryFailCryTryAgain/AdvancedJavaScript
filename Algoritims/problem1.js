// ## ENKLA ÖVNINGAR (Nivå 1)

// ### 1. Summera tal i array
// **Problem:** Skriv en funktion som tar emot en array med tal och returnerar summan av alla tal.

// **Indata:** `[1, 2, 3, 4, 5]`

// **Förväntad utdata:** `15`

const int = [1, 2, 3, 4, 5]
let total = 0

function SumTotal(item) {
    total += item
}

int.forEach(SumTotal);

console.log(total);