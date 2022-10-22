import domOperations from "../modules/domModule.js";
const dOps = new domOperations(document);

//##########################################################################
//---CREATING ARRAY WITH Array.from()
let sTitle = "---CREATING ARRAY WITH Array.from()";
let sText = [];

let sName = "Eduard";
let aRes = Array.from(sName);
sText.push(`Array from '${sName}': '${aRes}'`);
aRes = Array.from([1, 2, 3, 4, 5], (x) => Math.pow(x, 2));
sText.push(`Array from list of numbers: ${aRes}`);

dOps.fInsertDomItem(sTitle, sText);

//---ARRAY INSERT AND REMOVE
sTitle = "---ARRAY INSERT AND REMOVE";
sText = [];

aRes = Array.from(["a", "b", 3, 4, 5]);
sText.push(`Original array: ${aRes}`);
sText.push(
  `1)___.push() add item to the end: ${aRes.push(
    "c"
  )} (returns new array length)`
);
sText.push(`_____Array state: ${aRes}`);
sText.push(
  `2)___.unshift() add item to the beginning: ${aRes.unshift(
    "Ed"
  )} (returns new array length)`
);
sText.push(`_____Array state: ${aRes}`);
sText.push(
  `3)___.pop() remove last item: ${aRes.pop()} (returns item removed)`
);
sText.push(`_____Array state: ${aRes}`);
sText.push(
  `4)___.shift() remove first item: ${aRes.shift()} (returns item removed)`
);
sText.push(`_____Array state: ${aRes}`);
sText.push(
  `5)___.splice() add item in the middle: ${aRes.splice(1, 0, "Jan")}`
);
sText.push(`_____Array state: ${aRes}`);
sText.push(
  `6)___.splice() replace item in the middle: ${aRes.splice(
    2,
    1,
    "feb"
  )} (returns item replaced)`
);
sText.push(`_____Array state: ${aRes}`);

dOps.fInsertDomItem(sTitle, sText);

//---OTHER ARRAY FUNCTIONS
sTitle = "---OTHER ARRAY FUNCTIONS";
sText = [];

aRes = Array.from(["d", "a", "C", 3, 8, 2, 5]);
sText.push(`Original array: ${aRes}`);
sText.push(`1)___.at() Return item at index 2: ${aRes.at(2)}`);
sText.push(
  `2)___.toSring to transform array in string: '${aRes.toString()}' typeof: ${typeof aRes.toString()}`
);
sText.push(`_____Current array: ${aRes}`);
sText.push(`3)___.reverse() Returns reversed array: ${aRes.reverse()}`);
sText.push(`_____Current array: ${aRes}`);
sText.push(
  `4)___.slice(2, 4) Returns from position 2 to 4 of array: ${aRes.slice(2, 4)}`
);
sText.push(`_____Current array: ${aRes}`);
sText.push(`5)___.slice(-2) Returns 2 last items of array: ${aRes.slice(-2)}`);
sText.push(`_____Current array: ${aRes}`);
dOps.fInsertDomItem(sTitle, sText);

//---SORT FUNCTION
sTitle = "---SORT FUNCTION";
sText = [];

let aItems = [33, 5, 77, 9, 129, 20];
sText.push(
  `Sort function without parameters. (String sort ascending. Number 100 goes first)`
);
sText.push(`Original Array: ${aItems}`);
sText.push(`Sorted Array (as string): ${aItems.sort()}`);
sText.push(
  `Ascending sorted Array (as number): ${aItems.sort((a, b) => a - b)}`
);
sText.push(
  `Descending sorted Array (as number): ${aItems.sort((a, b) => b - a)}`
);

dOps.fInsertDomItem(sTitle, sText);

//---FILTER, FIND, FINDLAST, FINDINDEX
sTitle = "---FILTER, FIND, FINDLAST, FINDINDEX";
sText = [];

aRes = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
sText.push("1)___Filter: generate another array with function filtered items");
sText.push(`_____Original array: ${aRes}`);
let aFiltered = aRes.filter((word) => word.length > 6);
sText.push(`_____Filtered array (length > 6): ${aFiltered}`);
sText.push("2)___FIND: Returns first found element on array");
aRes = [5, 12, 8, 130, 44];
let found = aRes.find((element) => element > 10);
sText.push(`_____Original array: ${aRes}`);
sText.push(`_____First element found >10: ${found}`);
sText.push("3)___FINDLAST: Returns last found element on array");
aRes = [5, 12, 8, 130, 44];
found = aRes.findLast((element) => element < 10);
sText.push(`_____Original array: ${aRes}`);
sText.push(`_____First element found <10: ${found}`);
sText.push("4)___FINDINDEX: Returns index of found element on array");
aRes = [5, 12, 8, 130, 44];
sText.push(`_____Original array: ${aRes}`);
const isLargeNumber = (element) => element > 13;
sText.push(
  `_____Index of found element (USING SEPARATE ARROW FUNCTION): ${aRes.findIndex(
    isLargeNumber
  )}`
);

//aRes.lastIndexOf()

dOps.fInsertDomItem(sTitle, sText);

//---SUM ARRAY WITH REDUCE FUNCTION
sTitle = "---SUM ARRAY WITH REDUCE FUNCTION";
sText = [];

let aNum = [2, 3, 4, 5, 6];
const iSum = aNum.reduce((valAnterio, valAtual) => valAnterio + valAtual);
//same example but different:
//const iSum = aNum.reduce((partialSum, a) => partialSum + a, 0);
sText.push(`Sum array: ${aNum}`);
sText.push(`Result of sum: ${iSum}`);

dOps.fInsertDomItem(sTitle, sText);

//---MAP FUNCTION
sTitle = "---MAP FUNCTION";
sText = [];

aRes = [5, 12, 8, 130, 44];
sText.push("1)__ Map one array to annother calculated one");
sText.push(`_____Original array: ${aRes}`);
sText.push(
  `_____Result of maping to (item * 2): ${aRes.map((item) => item * 2)}`
);
aRes = [4, 9, 16, 25];
sText.push("2)__ Map using separate function");
sText.push(`_____Original array: ${aRes}`);

sText.push(`_____Result of maping to (item * 2): ${aRes.map(myMapFunction)}`);
function myMapFunction(num) {
  return Math.sqrt(num);
}

dOps.fInsertDomItem(sTitle, sText);

//---SPREAD OPERATOR (...)
sTitle = "---SPREAD OPERATOR (...)";
sText = [];

let aTeste = ["Eduard", "Laysa", "Helena"];
sText.push(
  `Using spread operator to concatenate arrays: ${[...aTeste, "Helena"]}`
);
aTeste = [5, 8, 6, 3, 9];
sText.push(`To use values in a function: ${Math.min(...aTeste)}`);

dOps.fInsertDomItem(sTitle, sText);
//##########################################################################
// update html
dOps.fBuildSite();
