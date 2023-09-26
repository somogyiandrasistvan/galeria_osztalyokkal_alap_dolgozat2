class NagyKepView {
  #kep;
  constructor(szuloElem, kep) {
    this.#kep = kep;
    this.szuloElem = szuloElem;
    this.#htmlLetrehozasa();
    this.balGombElem = $("#balGomb");
    this.jobbGombElem = $("#jobbGomb");
    this.nagyIMGElem = $("#nagyIMG");
    this.balGombElem.on("click", () => {
      this.#esemenyTrigger("bal");
    });
    this.jobbGombElem.on("click", () => {
      this.#esemenyTrigger("jobb");
    });
  }

  setNagyKepElem(kepEleres){
    this.nagyIMGElem.attr({"src": kepEleres, "alt": kepEleres});
  }

  #htmlLetrehozasa() {
    let txt = "<button id='balGomb'>BAL</button>";
    txt += `<div classs="fokeptarolo"><img id="nagyIMG" src="${this.#kep}" alt="${
      this.#kep
    }"> </div>`;
    txt += "<button id='jobbGomb'>JOBB</button>";
    this.szuloElem.html(txt);
  }

  #esemenyTrigger(esemenyNev) {
    const E = new CustomEvent(esemenyNev);
    window.dispatchEvent(E);
  }
}

export default NagyKepView;
