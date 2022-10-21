import domOperations from "../modules/domModule.js";
const dOps = new domOperations(document);

//##########################################################################

// isInteger - Verifies if the variable is of INT Type
let sTitle = "-- IS INTEGER";
let sNum = "25";
let sText = [
  `Verify if variable is of number format: ${Number.isInteger(sNum)}`,
];

dOps.fInsertDomItem(sTitle, sText);

// parseInt - CONVERT TO INT converts to int and returns NaN if it is not a number
sTitle = "-- CONVERT TO INT";
sText = [];
sNum = "33";

sText.push(
  `Converting to INT variable of type: '${typeof sNum}' with value: '${sNum}'`
);
// parseInt is equal to Number()
let sConverted = parseInt(sNum);
let bIsNumber = !isNaN(sConverted);
sText.push(
  `Converted var now of type: '${typeof sConverted}' with value: ${sConverted}. Is Number: ${bIsNumber}`
);

sNum = "15.85";
sText.push(
  `Converting to FLOAT variable of type: '${typeof sNum}' with value: '${sNum}'`
);
sConverted = parseFloat(sNum);
bIsNumber = !isNaN(sConverted);
sText.push(
  `Converted var now of type: '${typeof sConverted}' with value: ${sConverted}. Is Number: ${bIsNumber}`
);

// NAN is returned if not float or int
sText.push("If converting string to num, 'NaN' is returned");
sNum = "abc";
sText.push(`Converting ${sNum} to int.`);
sConverted = parseInt(sNum);
sText.push(
  `Converted result: '${sConverted}'. Is NanN: '${isNaN(
    sConverted
  )}'. Var type is: '${typeof sConverted}'`
);
dOps.fInsertDomItem(sTitle, sText);

// TO FIXED - ROUND FLOAD
sTitle = "-- TO FIXED - ROUND FLOAD";
sText = [];
let iNum = Number(33.46854);
sText.push(`Original number: ${iNum}`);
sText.push(`Formatted 2 decimal: ${iNum.toFixed(2)}`);

dOps.fInsertDomItem(sTitle, sText);

// TO STRING - CONVERT TO STRING
sTitle = "-- TO STRING - CONVERT TO STRING";
sText = [];
iNum = 33.46854;
sText.push(`Original number: ${iNum}`);
let sRes = iNum.toString();
sText.push(`Converted to string. Var type: '${typeof sRes}', Value: '${sRes}'`);

dOps.fInsertDomItem(sTitle, sText);
//##########################################################################
dOps.fBuildSite();
