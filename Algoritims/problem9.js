// ### 9. Anagram-kontroll
// **Problem:** Skapa en funktion som kontrollerar om två strängar är anagram (innehåller samma bokstäver i olika ordning).

// **Indata:** `"listen", "silent"`

// **Förväntad utdata:** `true`


const input1 = "listen";

const input2 = "silent";


function CheckAnagram(int1, int2) {
    let res1 = []
    let res2 = []

    res1 = int1.split("").sort();
    res2 = int2.split("").sort();

    if (res1.length != res2.length) {
        return false;
    }
    for (i = 0; i < res1.length; i++) {
        if (res1[i] != res2[i]) {
            return false;
        } else {
            return true;
        }
    }
}

let result = CheckAnagram(input1, input2);
console.log(result);