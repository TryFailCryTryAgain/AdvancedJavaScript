// ### 6. Summera alla tal i en nästlad array
// **Problem:** Implementera en funktion som summerar alla tal i en array, där arrayen kan innehålla andra arrayer på godtyckligt djup.

// **Indata:** `const arr = [1, [2, [3, 4]], 5];`

// **Förväntad utdata:** `sumNested(arr); // 15`

const arr = [1, [2, [3, [2, 5, 2], 4]], 5];

function sumTotal(ry) {
    let total = 0
    for (i = 0; i < ry.length; i++) {
        total += ry[i];
    }
    console.log(total);
}

function getArrayDepth(ry) {
    let levels = 0;
    let prev_length = 1;
    let curr_length = ry.length;

    while(curr_length > prev_length) {
        ry = ry.flat();
        prev_length = curr_length
        curr_length = ry.length;
        levels ++
    }
    sumTotal(ry);
}

const depth = getArrayDepth(arr);