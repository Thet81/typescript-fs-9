"use strict";
const multiplicator = (a, b, printText) => {
    console.log(printText, a * b);
};
const a = Number(process.argv[2]);
const b = Number(process.argv[3]);
multiplicator(a, b, "The result is:");
