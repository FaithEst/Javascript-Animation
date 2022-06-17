// Using the umbrella example from the previous
// video, see if you can follow the example open() 
// method and create the close() method

const umbrella = { 
    color: "pink",
    isOpen: false,
    open: function() { 
      if (umbrella.isOpen === true) {
        return "The umbrella is already opened!";
      } else {
        umbrella.isOpen = true;
        return "Julia opens the umbrella!";
      }
     },
     //close() starts here
     close: function() {
         if (umbrella.isOpen === false) {
            return "The umbrella is already closed!";
         } else {
             umbrella.isOpen === false;
             return "Julia closes the umbrella"
         }
     }
  };

  // test code
console.log(umbrella.open());
console.log(umbrella.close());
console.log(umbrella["color"]); //bracket notation for accessing umbrella elements
