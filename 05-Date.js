import domOperations from "./domModule.js";
const dOps = new domOperations(document);

//##########################################################################
//---INITIAL
let sTitle = "---INITIAL";
let sText = [];
sText.push("Initial text.");

dOps.fInsertDomItem(sTitle, sText);

//##########################################################################
// update html
dOps.fBuildSite();
