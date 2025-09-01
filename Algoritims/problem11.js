// ### 11. Hitta saknade nummer
// **Problem:** I en array med tal från 1 till n saknas ett tal. Hitta vilket.

// **Indata:** `[1, 2, 3, 5, 6, 7, 8, 9, 10]`

// **Förväntad utdata:** `4`

// Antar att den redan är sorted från min -> max
const int = [1, 2, 3, 4, 5, 6, 8, 9, 10]

function FindMissingNumber(arr) {
    let result = 0

    for (i = 0; i < arr.length; i++){
        let j = i + 1
        if (arr[i] + 1 != arr[j]) {
            result = i + 2;
            return result;
        }
    }
}

const Finish = FindMissingNumber(int);
console.log(Finish);

// NOTE: THis algo only takes in an account that only one number is missing and grabs the first one