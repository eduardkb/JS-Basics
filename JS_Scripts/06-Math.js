import domOperations from "../modules/domModule.js";
const dOps = new domOperations(document);

//##########################################################################
//---MATH LIBRARY
let sTitle = "---MATH LIBRARY";
let sText = [];
sText.push(`Getting PI value: ${Math.PI}`);
sText.push(`Round PI: ${Math.round(Math.PI)}`);
sText.push(`Floor of PI: ${Math.floor(Math.PI)}`);
sText.push(`Ceil of PI: ${Math.ceil(Math.PI)}`);
sText.push(`3 to the pwer of 4: ${Math.pow(3, 4)}`);

dOps.fInsertDomItem(sTitle, sText);

//---MAX and MIN
sTitle = "---MAX and MIN";
sText = [];

let aList = [2, -3, 4, 8, 6];
sText.push(`Max value : ${Math.max(...aList)}`);
sText.push(`Min value : ${Math.min(...aList)}`);

dOps.fInsertDomItem(sTitle, sText);

//---RANDOM NUMBERS
sTitle = "---RANDOM NUMBERS";
sText = [];

sText.push(`Generate random number: ${Math.random()}`);
// get random number between 1 and 10
function getRand(iMax, iMin) {
  iMax--;
  iMin++;
  return Math.floor(Math.random() * (iMax - iMin + 1) + iMin);
}
sText.push(`Rand number betweem 1 and 10: ${getRand(1, 10)}`);

// generate array of random numbers
let aRand = [];
sText.push("List of random numbers: ");
for (let i = 0; i < 100; i++) {
  aRand.push(getRand(1, 10));
  if ((i + 1) % 20 == 0) {
    sText.push(aRand);
    aRand = [];
  }
}

dOps.fInsertDomItem(sTitle, sText);

//##########################################################################
// update html
dOps.fBuildSite();
