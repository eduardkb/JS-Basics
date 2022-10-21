import domOperations from "../modules/domModule.js";
const dOps = new domOperations(document);

//##########################################################################
//---GET A DATE
let sTitle = "---GET A DATE";
let sText = [];

let dDate = new Date();
sText.push(`Calling 'new Date()' vartype: '${typeof dDate}' result: ${dDate}`);
dDate = Date();
sText.push(`Calling 'Date()' vartype: '${typeof dDate}' result: ${dDate}`);
dDate = Date.now();
sText.push(
  `Calling 'Date.now()' vartype: '${typeof dDate}' result: ${dDate}
   (returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC)`
);

dOps.fInsertDomItem(sTitle, sText);

//---GET UTC DATE
sTitle = "---GET UTC DATE";
sText = [];

dDate = new Date();
let dUTC = dDate.toUTCString();
sText.push(
  `Calling 'dDate.toUTCString()' vartype: '${typeof dUTC}' result: ${dUTC}`
);

dOps.fInsertDomItem(sTitle, sText);

//---DATE FUNCTIONS
sTitle = "---DATE FUNCTIONS";
sText = [];

dDate = new Date();
let dDayOfWeek = dDate.getDay(); // day of the week
sText.push(
  `Calling 'new Date().getDay()' vartype: '${typeof dDayOfWeek}' result: ${dDayOfWeek} (day of the week)`
);
let dDay = new Date().getDate();
sText.push(
  `Calling 'new Date().getDate()' vartype: '${typeof dDay}' result: ${dDay} (day of the month)`
);
let dMilis = new Date().getMilliseconds();
sText.push(`Getting millisseconds: ${dMilis}`);
let dHours = new Date().getHours();
sText.push(`Getting hours: ${dHours}`);

dOps.fInsertDomItem(sTitle, sText);

//---TO TIME AND TO DATE STRING
sTitle = "---TO TIME AND TO DATE STRING";
sText = [];

dDate = new Date();
let dTime = dDate.toTimeString();
sText.push(
  `Calling 'Date().toTimeString()' vartype: '${typeof dTime}' result: ${dTime}`
);
dTime = dDate.toLocaleDateString();
sText.push(
  `Calling 'Date().toLocaleDateString()' vartype: '${typeof dTime}' result: ${dTime}`
);

dOps.fInsertDomItem(sTitle, sText);

//---SPECIFY DATE
sTitle = "---SPECIFY DATE";
sText = [];

let dateInStr = "17 Jan 1983 03:15:18 GMT";
const dBirth = new Date(dateInStr);
sText.push(
  `Parsed string '${dateInStr}' to date result: '${dBirth}' of vartype: ${typeof dBirth}`
);
sText.push(
  `extracting day ${dBirth.getDate()} and seconds: ${dBirth.getSeconds()}`
);

dOps.fInsertDomItem(sTitle, sText);

//---DIFFERENCE BETWEEN TWO DATES
sTitle = "---DIFFERENCE BETWEEN TWO DATES";
sText = [];

dateInStr = "1983-01-17";
const myBirthdate = new Date(dateInStr);
const rightNow = new Date();
const numberOfMilisecodsILived = rightNow - myBirthdate;

sText.push(
  `Subtracting dates: Subtracting '${rightNow}' from '${myBirthdate}' = number of miliseconds I lived: '${numberOfMilisecodsILived}'`
);

// convert milisseconds to days and hours
const days = Math.floor(numberOfMilisecodsILived / (24 * 60 * 60 * 1000));
const daysms = numberOfMilisecodsILived % (24 * 60 * 60 * 1000);
const hours = Math.floor(daysms / (60 * 60 * 1000));

sText.push(`Converted ms to Days: ${days}`);
sText.push(`Converted ms to Hours: ${hours}`);

dOps.fInsertDomItem(sTitle, sText);

//---SUBTRACTING DAYS
sTitle = "---SUBTRACTING DAYS";
sText = [];

let dNow = new Date();
sText.push(`Today is: '${dNow}`);
dNow.setDate(dNow.getDate() - 5);
sText.push(`5 days ago was: '${dNow}`);

dOps.fInsertDomItem(sTitle, sText);
//##########################################################################
// update html
dOps.fBuildSite();
