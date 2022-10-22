import domOperations from "../modules/domModule.js";
const dOps = new domOperations(document);

//##########################################################################
//---FUNCTIONS
let sTitle = "---FUNCTIONS";
let sText = [];
function sayHello(name, lastname) {
  sText.push("Hi, " + name + " " + lastname);
}
sayHello("Edu", "Buhali");
dOps.fInsertDomItem(sTitle, sText);

//--ARROW FUNCTIONS
sTitle = "--ARROW FUNCTIONS";
sText = [];

sText.push("Sum function with arrow function");
const fSoma = (a, b) => a + b;
sText.push(`Resultado função fSoma(): ${fSoma(5, 3)}`);

const fFibonatti = (iQuant, iStart) => {
  let aRes = [iStart, iStart + 1];
  for (let i = 1; i < iQuant - 1; i++) {
    aRes.push(aRes[i] + aRes[i - 1]);
  }
  return aRes;
};
sText.push(`Resultado função fFibonatti(): ${fFibonatti(10, 1)}`);

dOps.fInsertDomItem(sTitle, sText);

//##########################################################################
// update html
dOps.fBuildSite();
