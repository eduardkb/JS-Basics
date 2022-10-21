import domOperations from "./domModule.js";
const dOps = new domOperations(document);

//##########################################################################
//---TRANSFORM TO STRING
let sTitle = "---TRANSFORM TO STRING";
let aList = [];

let iNum = 17.13;
aList.push(`Value: ${iNum} Type before: ${typeof iNum}`);
iNum = iNum.toString();
aList.push(`Value: ${iNum} Type after toStrin(): ${typeof iNum}`);

dOps.fInsertDomItem(sTitle, aList);

//---GET CHAR AT ANY POSITION
sTitle = "---GET CHAR AT ANY POSITION";
aList = [];

let sIn = "Mesa";
let res = sIn.charAt(2);
aList.push(`String: "${sIn}" | O caracter da posiçao 2 é "${res}".`);

dOps.fInsertDomItem(sTitle, aList);

//---LENGTH PROPERTY
sTitle = "---LENGTH PROPERTY";
aList = [];

sIn = "Life, the universe and everything.";
res = sIn.length;
aList.push(`--> String: "${sIn}" | O tamanho da string é: "${res}".`);

dOps.fInsertDomItem(sTitle, aList);

//---ENDSWITH FUNCTION
sTitle = "---ENDSWITH FUNCTION";
aList = [];

sIn = "Life, the universe and everything.";
res = sIn.endsWith("ything.");
aList.push(
  `--> String: "${sIn}" | A string termina com "everything.": "${res}".`
);

dOps.fInsertDomItem(sTitle, aList);

//---INCLUDES FUNCTION");
sTitle = "---INCLUDES FUNCTION";
aList = [];

sIn = "The quick brown fox jumps over the lazy dog.";
res = sIn.includes("fox");
aList.push(`String: "${sIn}" | A string contém "fox.": "${res}".`);
res = sIn.includes("Lazy");
aList.push(`String: "${sIn}" | A string contém "Lazy.": "${res}".`);

dOps.fInsertDomItem(sTitle, aList);

//---INDEXOF FUNCTION
sTitle = "---INDEXOF FUNCTION";
aList = [];

sIn = "The quick brown fox jumps over the lazy dog. The fox is fast.";
res = sIn.indexOf("fox");
aList.push(
  `String: "${sIn}" | A pirmeira instancia de fox esta na posição: "${res}".`
);
res = sIn.indexOf("fox", 16 + 1);
aList.push(
  `String: "${sIn}" | A segunda instancia de fox está na posiçao: "${res}".`
);
res = sIn.indexOf("cat");
aList.push(`String: "${sIn}" | Procurando "Cat" retorna: "${res}".`);

dOps.fInsertDomItem(sTitle, aList);

//---MATCH FUNCTION
sTitle = "---MATCH FUNCTION";
aList = [];

sIn = "The quick brown fox jumps over the lazy dog. It barked. and Run.";
const regex = /[A-Z]/g;
res = sIn.match(regex);
aList.push(
  `--> String: "${sIn}" | Match retorna valores que correspondem a regex configurada. nesse caso ${regex}: "${res}".`
);
dOps.fInsertDomItem(sTitle, aList);

//---PADEND AND PAD START FUNCTION
sTitle = "---PADEND AND PAD START FUNCTION";
aList = [];

sIn = "The dog barked.";
res = sIn.padEnd(25, "!");
aList.push(
  `--> String: "${sIn}" | PadEnd - adiciona caracteres até toda string conter x caracteres: "${res}".`
);
sIn = "The dog barked.";
res = sIn.padStart(17, ">");
aList.push(
  `--> String: "${sIn}" | PadStart - adiciona caracteres até toda string conter x caracteres"${res}".`
);
dOps.fInsertDomItem(sTitle, aList);

//---REPLACE FUNCTION
sTitle = "---REPLACE FUNCTION";
aList = [];

const p =
  "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";
res = p.replace("dog", "monkey");
aList.push(`Original: ${p}`);
aList.push(`Replaced FIRST 'dog': ${res}`);
const regex1 = /dog/gi;
res = p.replace(regex1, "ferret");
aList.push(`Repaced ALL 'dog' with regex (g param): ${res}`);
res = p.replaceAll("dog", "cat");
aList.push(`Repaced ALL 'dog' with repalceAll(): ${res}`);
dOps.fInsertDomItem(sTitle, aList);

//---SLICE FUNCTION
sTitle = "---SLICE FUNCTION";
aList = [];

sIn = "The quick brown fox jumps over the lazy dog.";
aList.push(`Slice and get string from positon 31 onward: ${sIn.slice(31)}`);
aList.push(`Slice and get specific middle caracters: ${sIn.slice(4, 19)}`);
aList.push(`Slice from the end: ${sIn.slice(-4)}`);
dOps.fInsertDomItem(sTitle, aList);

//---SPLIT FUNCTION
sTitle = "---SPLIT FUNCTION";
aList = [];

aList.push(`Split with space. Word in position 4: ${sIn.split(" ")[4]}`);
const aSplit = sIn.split("");
aList.push(`Split each letter to an array. Letter in position 4: ${aSplit[4]}`);
aList.push(`Full array printed: ${aSplit}`);
dOps.fInsertDomItem(sTitle, aList);

//---INVERT STRING
sTitle = "---INVERT STRING";
aList = [];

let sInput = "The quick brown fox jumps over the lazy dog";
sInput = sInput.toLowerCase();
aList.push(`Original string: ${sInput}`);
let sRes = "";
for (let i = sInput.length - 1; i >= 0; i--) {
  sRes += sInput[i];
}
aList.push(`Inverted string: ${sRes}`);

dOps.fInsertDomItem(sTitle, aList);

//---INVERT WORDS
sTitle = "---INVERT WORDS";
aList = [];

sInput = "The quick brown fox jumps over the lazy dog";
aList.push(`Original string: ${sInput}`);
let aWords = sInput.split(" ");
sRes = "";
for (let i = aWords.length - 1; i >= 0; i--) {
  sRes += aWords[i] + " ";
}
sRes = sRes.trim();
aList.push(`Inverted words: ${sRes}`);

dOps.fInsertDomItem(sTitle, aList);
//##########################################################################
// update html
dOps.fBuildSite();
