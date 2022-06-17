// ----- intro to forEach method ----
// method 1 which is the preferred way
let donuts = ["jelly donut", "chocolate donut", "glazzed donut"];

donuts.forEach(function(donut) {
    donut += " hole";
    console.log(donut);
});
console.log();
console.log("------------------");
// alternatively, you can use the long method
let donuts_2 = ["jelly donut", "chocolate donut", "glazzed donut"];

function printDonuts(donut) {
    donut += " hole";
    donut = donut.toUpperCase();
    console.log(donut);
}

donuts_2.forEach(printDonuts);

//example 2
console.log();
console.log("-----------------------");

const myArray = ["A", "B", "C", "D"];

function myAwesomeFunction(element, index, array) {
  console.log("Element: ", element);
  console.log("Index: ", index);
  console.log("Array: ", array);
}

myArray.forEach(myAwesomeFunction);