import domOperations from "../modules/domModule.js";
const dOps = new domOperations(document);

//##########################################################################
//---OBJECT
let sTitle = "---OBJECT";
let sText = [];

sText.push("Defining a Object.");
let oPessoa = {
  name: "Eduard",
  age: 39,
  height: 1.83,
  isMale: true,
};
//acess property with '.'
sText.push(`Print Object property name: ${oPessoa.name}`);
//acess property with '[]'
sText.push(`Print Object property height: ${oPessoa["height"]}`);
sText.push(`Print Object property isMale: ${oPessoa.isMale}`);
dOps.fInsertDomItem(sTitle, sText);

//---DESTRUCTURING OBJECTS
sTitle = "---DESTRUCTURING OBJECTS";
sText = [];
//access object destructuring the object
//(assigning property to a variable name)
const { name, age, ...aRest } = oPessoa;
sText.push(`Destructuring one object`);
sText.push(
  `>>> Accessing destrucutred object: Name: '${name}' | Age: '${age}'`
);
sText.push(`>>> Ret of the itmes on destructured array aRest: ${aRest.height}`);

let aObjects = [
  {
    id: 1,
    item: "Earbuds",
    color: "blue",
    price: 9.99,
    inStock: true,
  },
  {
    id: 2,
    item: "Lantern",
    color: "black",
    price: 59.99,
    inStock: false,
  },
  {
    id: 3,
    item: "Laptop",
    color: "red",
    price: 2980.8,
    inStock: true,
  },
];
sText.push(`Destructuring array of objects to print all items of a property`);
let aItemsToSell = aObjects.map((aObjects) => aObjects.item);
sText.push(`>>> Properties 'item': ${aItemsToSell}`);
let aPrices = aObjects.map((aObjects) => aObjects.price);
sText.push(`>>> Properties 'price': ${aPrices}`);

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
