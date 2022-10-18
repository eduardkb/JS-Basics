import domOperations from './domModule.js'
const dOps = new domOperations(document)

//##########################################################################
l.writeLog("h1", "### to string method ###");
let iNum = 17.13;
l.writeLog("p", `Value: ${iNum} Type before: ${typeof (iNum)}`);
iNum = iNum.toString();
l.writeLog("p", `Value: ${iNum} Type after toStrin(): ${typeof (iNum)}`);

l.writeLog("h1", "### Get char at any position ###");
let sIn = "Mesa";
let res = sIn.charAt(2);
l.writeLog("p", `--> String: "${sIn}" | O caracter da posiçao 2 é "${res}".`)

l.writeLog("h1", "### Length Property ###");
sIn = "Life, the universe and everything.";
res = sIn.length;
l.writeLog("p", `--> String: "${sIn}" | O tamanho da string é: "${res}".`)

l.writeLog("h1", "### EndsWith ###");
sIn = "Life, the universe and everything.";
res = sIn.endsWith("ything.");
l.writeLog("p", `--> String: "${sIn}" | A string termina com "everything.": "${res}".`)

l.writeLog("h1", "### Includes ###");
sIn = "The quick brown fox jumps over the lazy dog."
res = sIn.includes("fox");
l.writeLog("p", `--> String: "${sIn}" | A string contém "fox.": "${res}".`)
res = sIn.includes("Lazy");
l.writeLog("p", `--> String: "${sIn}" | A string contém "Lazy.": "${res}".`)

l.writeLog("h1", "### indexOf ###");
sIn = "The quick brown fox jumps over the lazy dog. The fox is fast."
res = sIn.indexOf("fox")
l.writeLog("p", `--> String: "${sIn}" | A pirmeira instancia de fox esta na posição: "${res}".`)
res = sIn.indexOf("fox", 16 + 1);
l.writeLog("p", `--> String: "${sIn}" | A segunda instancia de fox está na posiçao: "${res}".`)
res = sIn.indexOf("cat");
l.writeLog("p", `--> String: "${sIn}" | Procurando "Cat" retorna: "${res}".`)


l.writeLog("h1", "### match ###");
sIn = "The quick brown fox jumps over the lazy dog. It barked. and Run."
const regex = /[A-Z]/g;
res = sIn.match(regex)
l.writeLog("p", `--> String: "${sIn}" | Match retorna valores que correspondem a regex configurada. nesse caso ${regex}: "${res}".`)

l.writeLog("h1", "### padEnd and padStart ###");
sIn = "The dog barked."
res = sIn.padEnd(25, '!')
l.writeLog("p", `--> String: "${sIn}" | PadEnd - adiciona caracteres até toda string conter x caracteres: "${res}".`)
sIn = "The dog barked."
res = sIn.padStart(17, '>')
l.writeLog("p", `--> String: "${sIn}" | PadStart - adiciona caracteres até toda string conter x caracteres"${res}".`)

l.writeLog("H1", "### replace function ###")
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
res = p.replace('dog', 'monkey');
l.writeLog("p", `Original: ${p}`);
l.writeLog("p", `Replaced FIRST 'dog': ${res}`);
const regex1 = /dog/gi;
res = p.replace(regex1, "ferret");
l.writeLog("p", `Repaced ALL 'dog' with regex (g param): ${res}`);
res = p.replaceAll('dog', 'cat');
l.writeLog("p", `Repaced ALL 'dog' with repalceAll(): ${res}`);


l.writeLog("H1", "### slice function ###")
sIn = 'The quick brown fox jumps over the lazy dog.';
l.writeLog("p", `Slice and get string from positon 31 onward: ${sIn.slice(31)}`)
l.writeLog("p", `Slice and get specific middle caracters: ${sIn.slice(4, 19)}`)
l.writeLog("p", `Slice from the end: ${sIn.slice(-4)}`)

l.writeLog("H1", "### split function ###")
l.writeLog("p", `Split with space. Word in position 4: ${sIn.split(' ')[4]}`)
const aSplit = sIn.split('');
l.writeLog("p", `Split each letter to an array. Letter in position 4: ${aSplit[4]}`)
l.writeLog("p", `Full array printed: ${aSplit}`)

//##########################################################################
// update html
dOps.fBuildSite()