// ### 3. Filtrera jämna tal
// **Problem:** Skapa en funktion som returnerar endast de jämna talen från en array.

// **Indata:** `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`

// **Förväntad utdata:** `[2, 4, 6, 8, 10]`

const int = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let even = []

function CheckEven(item) {
    if (item % 2 == 0) {
        even.push(item);
    }
}

int.forEach(CheckEven);
console.log(even);