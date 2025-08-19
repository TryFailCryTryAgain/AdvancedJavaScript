

let input = "JavaScript"
let output = []

function ReverseString() {
    let arr = input.split("");
    arr.forEach(item => {
        output.unshift(item);
    })
    let res = output.join("");
    console.log(res);
}

ReverseString();