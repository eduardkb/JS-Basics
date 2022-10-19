import domOperations from "./domModule.js";
const dOps = new domOperations(document);

//##########################################################################
//---DEFINING A CLASS
let sTitle = "---DEFINING A CLASS";
let aLines = [];

class Pessoa {
  constructor(name, age, size, weigth) {
    this._name = name;
    this._age = age;
    this._size = size;
    this._weigth = weigth;
  }
  calcImc() {
    return this._weigth / this._size ** 2;
  }
  //defining a getter
  get weigth() {
    return this._weigth;
  }
  //defining a setter
  set setweigth(value) {
    this._weigth = value;
  }
}

const p = new Pessoa("Edu", 39, 1.84, 79);
let imc = p.calcImc();
aLines.push(
  `${p._name} is ${p._age} years old, weigths ${p._weigth} Kg and is ${p._size}m tall .`
);
aLines.push(`His IMC is: ${imc.toFixed(2)}`);

aLines.push("-----------------------------------------------");
aLines.push("### CALLING SETTER AND GETTER ###");
aLines.push(`Weigth value before setter: ${p._weigth}`);
aLines.push(`Changing weigth with setter`);
p.setweigth = 66;
aLines.push(`Calling getter: ${p.weigth}`);
aLines.push("-----------------------------------------------");
dOps.fInsertDomItem(sTitle, aLines);

//---DEFINE CLASS WITH INHERITANCE
sTitle = "---DEFINING CLASS WITH INHERITANCE";
aLines = [];
class Programador extends Pessoa {
  constructor(name, age, size, weigth, language, wpm) {
    super(name, age, size, weigth);
    this.language = language;
    this.wpm = wpm;
  }
  getCV() {
    return `Programmer ${this._name} writes in ${this.language} and types ${this.wpm}WPM.`;
  }
}

const pro = new Programador("Luana", 22, 1.65, 55, "C#", 180);
aLines.push("Calling a sub class method:");
aLines.push(`CV: ${pro.getCV()}`);
aLines.push("Calling parent class method:");
aLines.push(`Programmer ${pro._name} has IMC of ${pro.calcImc().toFixed(3)}`);
dOps.fInsertDomItem(sTitle, aLines);

//##########################################################################
// update html
dOps.fBuildSite();
