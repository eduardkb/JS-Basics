// Format Float
console.log("\n### FORMAT FLOAT ###");
let flt = 481 / 84;
console.log("--> Ogininal Float:", flt);
console.log("--> Formatted Float:", flt.toFixed(3));

console.log("\n### PARSE FLOAT FROM STRING ###");
let sFlt = "15.75486525";
console.log("--> Original string: ", sFlt);
console.log("--> Formatted Float: ", parseFloat(sFlt).toFixed(4));
