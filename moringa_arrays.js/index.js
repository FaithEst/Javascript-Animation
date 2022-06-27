/**
 * Programming Quiz: uses the method find() to single out a 
 * specific result in game record data for the Denver Broncos football team
 * 
 */

/**
 * QUIZ REQUIREMENTS
 * The function should receive 1 argument, an Array of JavaScript Objects
 * Each object has two properties: year and result
 * It should use find() to test each Object to see if the result is "W" — a win!
 * It should return the year when the win occurred (if it occurred at all!)
 * If no win is found, it should return, sadly, undefined
 */

const record = [                // array containing objects
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"}
];

function superbowlWin(record) {   // function
    const result = record.find(record => record.result === "W");
     console.log(!!result ? result.name : undefined);
}
superbowlWin(record);
