// --------- Removing Properties ---------
const printer = {
    on: true,
    mode: 'black and white',
    remainingSheets: 168,
    print: function () {
      console.log('The printer is printing!');
    }
};
delete printer.mode;

console.log(printer);