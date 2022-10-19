class domOperations {
  constructor(doc) {
    this._doc = doc;
    this._domItems = [];
    this._fRemoveDefault();
  }
  _fRemoveDefault() {
    // removes defauld HTML tag if JS is processed
    const domJsInfo = this._doc.querySelector("#jsInfo");
    domJsInfo.remove();
  }
  fInsertDomItem(sTitle, aLines) {
    // inserts each section to the array
    console.log(sTitle);
    console.log(`\t${aLines}`);
    this._domItems.push({ title: "h1", item: sTitle });

    for (let i = 0; i < aLines.length; i++) {
      this._domItems.push({ title: "p", item: aLines[i] });
    }
  }
  fBuildSite() {
    // put elements on array on the http site
    const domBody = this._doc.querySelector("body");
    this._domItems.forEach(function (entry) {
      const domElem = document.createElement(entry.title);
      //domElem.classList.add('item')
      domElem.innerText = entry.item;
      domBody.appendChild(domElem);
    });
  }
}
export default domOperations;
