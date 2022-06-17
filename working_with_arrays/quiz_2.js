// -------- map() implementation -----
// Use the map() method to take the array of 
// bill amounts shown below, and create a 
// second array of numbers called totals that shows 
//the bill amounts with a 15% tip added.

const bills = [
    50.23, 19.12, 34.01, 100.11, 12.15, 
    9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 
    100.10, 6.77, 2.22
];

let calcTotal = bills.map(function(value) {
    value *= 1.15; // value = value + (value * 0.15)
    value = value.toFixed(2); // round off to 2 dp
    value = parseFloat(value); // Number(value); // convert to number
    
    return value;
});
console.log(calcTotal);