// ### 8. Flatten nested array
// **Problem:** Skriv en funktion som plattar ut en flerdimensionell array till en endimensionell array. Hantera valfritt djup.

// **Indata:** `[1, [2, 3], [4, [5, 6]], 7]`

// **Förväntad utdata:** `[1, 2, 3, 4, 5, 6, 7]`


const input = [1, [2, 3], [4, [5, 6]], 7]
const ray = [1, 2, 3]

function flatArray(arr) {
    const result = arr.flat(Infinity);
    console.log(result);
    return result;
}

flatArray(input);
console.log(ray);