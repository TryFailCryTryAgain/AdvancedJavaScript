const arr = [
  { name: "Äpple", category: "frukt", price: 15 },
  { name: "Banan", category: "frukt", price: 12 },
  { name: "Morot", category: "grönsak", price: 8 },
  { name: "Tomat", category: "grönsak", price: 20 }
]

function SplitCategory(arr) {
  let frukt = []
  let grönsak = []
  arr.forEach(item => {
    if (item.category === "frukt") {
      frukt.push(item);
    } else if (item.category === "grönsak") {
      grönsak.push(item);
    }
  });
  console.log(frukt);
  console.log(grönsak);
}

SplitCategory(arr);