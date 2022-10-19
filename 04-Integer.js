import domOperations from './domModule.js'
const dOps = new domOperations(document)

//##########################################################################


// isInteger - Verifies if the variable is of INT Type
let sNum = "25";
let sText = '-- IS INTEGER'
let sRes = [`Verify if number with a string variable: ${Number.isInteger(sNum)}`];

dOps.fInsertDomItem(sText, sRes)

// parseInt converts to int and returns NaN if it is not a number
let sNum2 = "33";
sText = '-- CONVERT TO INT'
sRes = [`Convert: ${!isNaN(parseFloat(sNum2))}`]

dOps.fInsertDomItem(sText, sRes)


//##########################################################################
dOps.fBuildSite()