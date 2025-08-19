// ### 10. Beräkna medelvärde per nyckel
// **Problem:** Du har en array med objekt som representerar försäljningsdata. Beräkna medelvärdet för varje produktkategori.

// **Indata:**
// ```javascript
// [
//   { category: "elektronik", sales: 1200 },
//   { category: "kläder", sales: 800 },
//   { category: "elektronik", sales: 1500 },
//   { category: "kläder", sales: 900 },
//   { category: "elektronik", sales: 1800 }
// ]
// ```

// **Förväntad utdata:**
// ```javascript
// {
//   elektronik: 1500,
//   kläder: 850
// }
// ```

const input = [
  { category: "elektronik", sales: 1200 },
  { category: "kläder", sales: 800 },
  { category: "elektronik", sales: 1500 },
  { category: "kläder", sales: 900 },
  { category: "elektronik", sales: 1800 }
];

function CalcSales(arr) {
    let sales = {
        elektronik: { total: 0, count: 0, average: 0},
        kläder: { total: 0, count: 0, average: 0}
    }

    arr.forEach(item => {
        if (item.category === "elektronik") {
            sales.elektronik.total += item.sales
            sales.elektronik.count += 1;
        } else if (item.category === "kläder") {
            sales.kläder.total += item.sales;
            sales.kläder.count += 1;
        }

        sales.elektronik.average = sales.elektronik.total / sales.elektronik.count;
        sales.kläder.average = sales.kläder.total / sales.kläder.count;
    });

    return {
        elektronik: sales.elektronik.average,
        kläder: sales.kläder.average
    };
}

let result = CalcSales(input);
console.log(result);

