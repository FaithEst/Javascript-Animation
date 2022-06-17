// ---------- adding properties --------
const printer = {};

printer.on = true;
printer.mode = 'black and white';
printer['remainingSheets'] = 168;

printer.print = function () {    // adding an anonymous function
    console.log('The printer is printing!');
};
console.log(printer);