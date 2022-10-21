import domOperations from "../modules/domModule.js";
const dOps = new domOperations(document);

//##########################################################################
//---IF---
let sTitle = "-- IF";
let sText = "";
let sRes = [];
let num = 4;
if (num === 1) {
  sText = `Defined num (${num}) is equal to 1`;
} else if (num === 2) {
  sText = `Defined num (${num}) is equal to 2`;
} else {
  sText = `Defined num (${num}) is not equal to 1 or 2`;
}
sRes.push(sText);
dOps.fInsertDomItem(sTitle, sRes);

//---CASE---
sTitle = "-- CASE";
sText = "";
sRes = [];

let mes = "Feb";
switch (mes) {
  case "Jan":
    sText = "Case found month 1";
    break;
  case "Feb":
    sText = "Case found month 2";
    break;
  default:
    sText = "No month found by Case";
}
sRes.push(sText);
dOps.fInsertDomItem(sTitle, sRes);

//---FOR---
sTitle = "-- FOR";
sText = "";
sRes = [];
let colors = ["black", "white", "yellow", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  sRes.push(`Item ${i + 1}: value: ${colors[i]} `);
}
dOps.fInsertDomItem(sTitle, sRes);

//---WHILE---
sTitle = "-- WHILE";
sText = "";
sRes = [];

let i = 0;
while (i < 10) {
  sRes.push(`Print number: ${i + 1} `);
  i++;
}
dOps.fInsertDomItem(sTitle, sRes);

//---DO WHILE---
sTitle = "-- DO WHILE";
sText = "";
sRes = [];

let j = 0;
do {
  sRes.push(`DO While print: ${j} `);
  j++;
} while (j < 10);
dOps.fInsertDomItem(sTitle, sRes);

//##########################################################################
// update html
dOps.fBuildSite();
