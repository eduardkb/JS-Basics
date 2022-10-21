import domOperations from "./domModule.js";
const dOps = new domOperations(document);

//##########################################################################
//---OBJECT
let sTitle = "---OBJECT";
let sText = [];

sText.push("Defining a Object.");
let objTest = {
  name: "Eduard",
  age: 39,
  height: 1.83,
  isMale: true,
};
sText.push(`Print Object property name: ${objTest.name}`);
sText.push(`Print Object property height: ${objTest.height}`);
sText.push(`Print Object property isMale: ${objTest.isMale}`);

dOps.fInsertDomItem(sTitle, sText);

//---MAP (Dictionary where only one key exists)
sTitle = "---MAP";
sText = [];

const mapTest = new Map();

sText.push("Defining a MAP.");
mapTest.set("Model", "Civic");
mapTest.set("EngineSize", 2.1);
mapTest.set("Year", 2015);
mapTest.set("isWhite", true);

sText.push(`> Print Map property Model: ${mapTest.get("Model")}`);
sText.push(`> Print Map property Engine Size: ${mapTest.get("EngineSize")}`);

sText.push("Changing a Item.");
mapTest.set("Model", "Ka");
sText.push(`> Print Map property Model: ${mapTest.get("Model")}`);

sText.push("Getting size of a Map.");
sText.push(`> Map size: ${mapTest.size}`);

sText.push("Deleting a item of a Map.");
mapTest.delete("Year");
sText.push(`> Map size: ${mapTest.size}`);

sText.push("Searching a key of a Map.");
sText.push(`> Map has key 'isWhite': ${mapTest.has("isWhite")}`);
sText.push(`> Print Map property Model: ${mapTest.get("Model")}`);
sText.push(`> Map has key 'Ka': ${mapTest.has("Civic")}`);

sText.push("Get keys, values and entries iterators.");
let iteratorKeys = mapTest.keys();

sText.push(`> 1st Map key': ${iteratorKeys.next().value}`);
sText.push(`> 2st Map key': ${iteratorKeys.next().value}`);
sText.push(`> 3rd Map key': ${iteratorKeys.next().value}`);

sText.push("Iterating entries (key and value pair).");
let iteratorEntries = mapTest.entries();
for (const [key, value] of iteratorEntries) {
  sText.push(`> Key:${String(key).padEnd(15, "_")}: ${value}`);
}

sText.push("Iterating a Map");
mapTest.forEach((value, key, map) => {
  sText.push(`>> ${key} | ${value} | ${map}`);
});

dOps.fInsertDomItem(sTitle, sText);
//##########################################################################
// update html
dOps.fBuildSite();
