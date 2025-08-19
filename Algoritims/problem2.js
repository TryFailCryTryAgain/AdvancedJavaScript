// ### 2. Hitta största talet
// **Problem:** Skriv en funktion som hittar det största talet i en array utan att använda Math.max().

// **Indata:** `[45, 23, 67, 12, 89, 34]`

// **Förväntad utdata:** `89`

const int = [45, 23, 67, 12, 89, 34]
let curr = 0

function FindHighest(item) {
    if (item > curr) {
        curr = item
    }
}
// Log O(n) and be more efficent

int.forEach(FindHighest);
console.log(curr);