import domOperations from "./domModule.js";
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
sText.push("Placeholder");
dOps.fInsertDomItem(sTitle, sText);

//##########################################################################
// update html
dOps.fBuildSite();
