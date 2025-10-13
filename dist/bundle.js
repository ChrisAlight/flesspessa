"use strict";
var Flesspessa = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // scripts/entry.ts
  var entry_exports = {};

  // scripts/Storage.ts
  var Storage = class {
    constructor() {
      this.init();
    }
    init() {
      if (!localStorage.getItem("coins")) {
        localStorage.setItem("coins", "0");
      }
      if (!localStorage.getItem("purchases")) {
        localStorage.setItem("purchases", "[]");
        this.addPurchase("white");
      }
      if (!localStorage.getItem("difficulty")) {
        localStorage.setItem("difficulty", "easy");
      }
      this.updateCoinText();
    }
    getCoins() {
      return parseInt(localStorage.getItem("coins") || "0") || 0;
    }
    setCoins(amount) {
      if (typeof amount !== "number" || amount < 0) {
        throw new Error("Invalid coin amount");
      }
      localStorage.setItem("coins", amount.toString());
      this.updateCoinText();
    }
    addCoins(amount) {
      if (typeof amount !== "number" || amount < 0) {
        throw new Error("Invalid coin amount");
      }
      const currentCoins = this.getCoins();
      this.setCoins(currentCoins + amount);
    }
    spendCoins(amount) {
      if (typeof amount !== "number" || amount < 0) {
        throw new Error("Invalid coin amount");
      }
      const currentCoins = this.getCoins();
      if (currentCoins < amount) {
        throw new Error("Not enough coins");
      }
      this.setCoins(currentCoins - amount);
    }
    updateCoinText() {
      const coinText = document.getElementById("coinText");
      if (coinText) {
        coinText.innerHTML = String(this.getCoins());
      }
    }
    getPurchases() {
      return JSON.parse(localStorage.getItem("purchases") || "[]") || [];
    }
    hasPurchase(itemId) {
      const purchases = this.getPurchases();
      return purchases.includes(itemId);
    }
    addPurchase(itemId) {
      const purchases = this.getPurchases();
      if (!purchases.includes(itemId)) {
        purchases.push(itemId);
        localStorage.setItem("purchases", JSON.stringify(purchases));
      }
    }
    getDifficulty() {
      return localStorage.getItem("difficulty") || "easy";
    }
    setDifficulty(difficulty) {
      const validDifficulties = ["easy", "normal", "hard", "superHard"];
      if (!validDifficulties.includes(difficulty)) {
        throw new Error("Invalid difficulty");
      }
      localStorage.setItem("difficulty", difficulty);
    }
    setBackground(background) {
      if (typeof background !== "string") {
        throw new Error("Invalid background");
      }
      localStorage.setItem("background", background);
    }
    getBackground() {
      return localStorage.getItem("background");
    }
  };
  var Storage_default = Storage;

  // scripts/shopData.ts
  var shopData = {
    backgrounds: [
      { name: "red", price: 50, color: "#ffaaaa" },
      { name: "orange", price: 50, color: "#ff8e03ff" },
      { name: "yellow", price: 50, color: "#ffffaa" },
      { name: "green", price: 50, color: "#aaffaa" },
      { name: "teal", price: 50, color: "#02ffccff" },
      { name: "blue", price: 50, color: "#5763ffff" },
      { name: "purple", price: 50, color: "#ae5dffff" },
      { name: "magenta", price: 50, color: "#ba00feff" },
      { name: "pink", price: 50, color: "#ffb3d9ff" },
      { name: "brown", price: 50, color: "#a0522d" },
      { name: "white", price: 0, color: "#ffffff" },
      { name: "gray", price: 50, color: "#808080" },
      { name: "black", price: 50, color: "#000000" }
    ],
    difficulty: [
      { name: "flag drag", price: 0 },
      { name: "normal", price: 30 },
      { name: "hard", price: 50 }
    ],
    // characters: [
    //     { name: 'snake', price: 10, image: 'assets/characters/snake.png' },
    //     { name: 'dog', price: 10, image: 'assets/characters/dog.png' },
    //     { name: 'spike ball', price: 10, image: 'assets/characters/spikeBall.png' },
    //     { name: 'tree man', price: 10, image: 'assets/characters/treeMan.png' },
    //     { name: '33 damage', price: 10, image: 'assets/characters/33Damage.png' }
    // ],
    map: [
      { name: "map", price: 1e3 }
    ]
  };
  var shopData_default = shopData;

  // scripts/App.ts
  var difficultyData = {
    easy: {
      name: "Easy",
      countries: [
        { name: "USA", code: "us" },
        { name: "Canada", code: "ca" },
        { name: "China", code: "cn" },
        { name: "Jamaica", code: "jm" },
        { name: "UK", code: "gb" },
        { name: "Ireland", code: "ie" }
      ],
      reward: 3
    },
    normal: {
      name: "Normal",
      countries: [
        { name: "Serbia", code: "rs" },
        { name: "Sweden", code: "se" },
        { name: "Philippines", code: "ph" },
        { name: "Netherlands", code: "nl" },
        { name: "Bahamas", code: "bs" },
        { name: "Portugal", code: "pt" }
      ],
      reward: 5
    },
    hard: {
      name: "Hard",
      countries: [
        { name: "Ghana", code: "gh" },
        { name: "Uganda", code: "ug" },
        { name: "Kenya", code: "ke" },
        { name: "Rwanda", code: "rw" },
        { name: "Brunei", code: "bn" },
        { name: "Mauritius", code: "mu" }
      ],
      reward: 7
    },
    superHard: {
      name: "Super Hard!!!!!",
      countries: [
        { name: "Monaco", code: "mc" },
        { name: "Indonesia", code: "id" },
        { name: "Poland", code: "pl" },
        { name: "Chad", code: "td" },
        { name: "Romania", code: "ro" },
        { name: "Dominica", code: "dm" }
      ],
      reward: 10
    }
  };
  var App = class {
    constructor(storage2) {
      this.hasAnswered = false;
      this.correctAnswerCount = 0;
      this.storage = storage2;
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      this.difficulty = urlParams.get("difficulty") || "";
      if (!(this.difficulty in difficultyData) || !storage2.hasPurchase(this.difficulty)) {
        this.difficulty = "easy";
      }
      document.getElementById("difficultyHeader").innerHTML = difficultyData[this.difficulty].name;
      const nextDifficulty = Object.keys(difficultyData)[Object.keys(difficultyData).indexOf(this.difficulty) + 1];
      if (nextDifficulty && storage2.hasPurchase(nextDifficulty)) {
        this.nextDifficulty = nextDifficulty;
      }
      this.countries = difficultyData[this.difficulty].countries.slice();
      this.reward = difficultyData[this.difficulty].reward;
      this.generateAnswerButtons();
      this.setRandomFlag();
    }
    static setUpPage(storage2) {
      var _a;
      const backgroundName = storage2.getBackground();
      const backgroundColor = ((_a = shopData.backgrounds.find((bg) => bg.name === backgroundName)) == null ? void 0 : _a.color) || "#ffffff";
      document.body.style.setProperty("background-color", backgroundColor);
    }
    generateAnswerButtons() {
      const answerButtonContainer = document.getElementById("answerButtons");
      answerButtonContainer.innerHTML = "";
      for (const country of this.countries) {
        const answerButton = document.createElement("button");
        answerButton.innerHTML = country.name;
        answerButton.onclick = () => this.answer(country.name);
        answerButtonContainer.appendChild(answerButton);
      }
    }
    getRandomCountry() {
      const randomIndex = Math.floor(Math.random() * this.countries.length);
      return this.countries.splice(randomIndex, 1)[0];
    }
    setRandomFlag() {
      const randomCountry = this.getRandomCountry();
      const flagImage = document.getElementById("flagImage");
      flagImage.src = `assets/flags/${randomCountry.code}.webp`;
      this.correctAnswer = randomCountry;
    }
    answer(selection) {
      if (this.hasAnswered) {
        return;
      }
      this.hasAnswered = true;
      const result = document.getElementById("result");
      const resultMessage = document.getElementById("resultMessage");
      const resultLink = document.getElementById("resultLink");
      const wasCorrect = selection === this.correctAnswer.name;
      result.style.display = "inherit";
      if (wasCorrect) {
        this.correctAnswerCount++;
        this.storage.addCoins(this.reward);
        resultMessage.innerHTML = `Correct! The flag is for ${this.correctAnswer.name}.`;
        resultLink.innerHTML = this.correctAnswerCount < 3 ? "Next Question" : this.nextDifficulty ? `Try ${difficultyData[this.nextDifficulty].name}` : "Back to Menu";
        resultLink.onclick = () => {
          if (this.correctAnswerCount < 3) {
            this.setRandomFlag();
            result.style.display = "none";
          } else if (this.nextDifficulty) {
            window.location.href = `game.html?difficulty=${this.nextDifficulty}`;
          } else {
            window.location.href = "index.html";
          }
          this.hasAnswered = false;
        };
      } else {
        resultMessage.innerHTML = "Incorrect!";
        resultLink.innerHTML = "Try Again";
        resultLink.onclick = () => {
          result.style.display = "none";
          this.hasAnswered = false;
        };
      }
    }
  };
  var App_default = App;

  // scripts/FlagDrag.ts
  var countryNames = {
    ad: { name: "Andorra" },
    ae: { name: "United Arab Emirates" },
    af: { name: "Afghanistan" },
    ag: { name: "Antigua and Barbuda" },
    ai: { name: "Anguilla" },
    al: { name: "Albania" },
    am: { name: "Armenia" },
    ao: { name: "Angola" },
    ar: { name: "Argentina" },
    at: { name: "Austria" },
    au: { name: "Australia" },
    aw: { name: "Aruba" },
    az: { name: "Azerbaijan" },
    ba: { name: "Bosnia and Herzegovina" },
    bb: { name: "Barbados" },
    bd: { name: "Bangladesh" },
    be: { name: "Belgium" },
    bf: { name: "Burkina Faso" },
    bg: { name: "Bulgaria" },
    bh: { name: "Bahrain" },
    bi: { name: "Burundi" },
    bj: { name: "Benin" },
    bn: { name: "Brunei" },
    bo: { name: "Bolivia" },
    br: { name: "Brazil" },
    bs: { name: "Bahamas" },
    bt: { name: "Bhutan" },
    bw: { name: "Botswana" },
    by: { name: "Belarus" },
    bz: { name: "Belize" },
    ca: { name: "Canada" },
    cd: { name: "Democratic Republic of the Congo" },
    cf: { name: "Central African Republic" },
    cg: { name: "Republic of the Congo" },
    ch: { name: "Switzerland" },
    ci: { name: "Ivory Coast" },
    cl: { name: "Chile" },
    cm: { name: "Cameroon" },
    cn: { name: "China" },
    co: { name: "Colombia" },
    cr: { name: "Costa Rica" },
    cu: { name: "Cuba" },
    cv: { name: "Cape Verde" },
    cy: { name: "Cyprus" },
    cz: { name: "Czechia" },
    de: { name: "Germany" },
    dj: { name: "Djibouti" },
    dk: { name: "Denmark" },
    dm: { name: "Dominica" },
    do: { name: "Dominican Republic" },
    dz: { name: "Algeria" },
    ec: { name: "Ecuador" },
    ee: { name: "Estonia" },
    eg: { name: "Egypt" },
    er: { name: "Eritrea" },
    es: { name: "Spain" },
    et: { name: "Ethiopia" },
    fi: { name: "Finland" },
    fj: { name: "Fiji" },
    fm: { name: "Micronesia" },
    fo: { name: "Faroe Islands" },
    fr: { name: "France" },
    ga: { name: "Gabon" },
    gb: { name: "United Kingdom" },
    gd: { name: "Grenada" },
    ge: { name: "Georgia" },
    gf: { name: "French Guiana" },
    gg: { name: "Guernsey" },
    gh: { name: "Ghana" },
    gi: { name: "Gibraltar" },
    gl: { name: "Greenland" },
    gm: { name: "Gambia" },
    gn: { name: "Guinea" },
    gq: { name: "Equatorial Guinea" },
    gr: { name: "Greece" },
    gt: { name: "Guatemala" },
    gu: { name: "Guam" },
    gw: { name: "Guinea-Bissau" },
    gy: { name: "Guyana" },
    hk: { name: "Hong Kong" },
    hm: { name: "Heard Island and McDonald Islands" },
    hn: { name: "Honduras" },
    hr: { name: "Croatia" },
    ht: { name: "Haiti" },
    hu: { name: "Hungary" },
    id: { name: "Indonesia" },
    ie: { name: "Ireland" },
    il: { name: "Israel" },
    im: { name: "Isle of Man" },
    in: { name: "India" },
    io: { name: "British Indian Ocean Territory" },
    iq: { name: "Iraq" },
    ir: { name: "Iran" },
    is: { name: "Iceland" },
    it: { name: "Italy" },
    je: { name: "Jersey" },
    jm: { name: "Jamaica" },
    jo: { name: "Jordan" },
    jp: { name: "Japan" },
    ke: { name: "Kenya" },
    kg: { name: "Kyrgyzstan" },
    kh: { name: "Cambodia" },
    ki: { name: "Kiribati" },
    km: { name: "Comoros" },
    kn: { name: "Saint Kitts and Nevis" },
    kp: { name: "North Korea" },
    kr: { name: "South Korea" },
    kw: { name: "Kuwait" },
    ky: { name: "Cayman Islands" },
    kz: { name: "Kazakhstan" },
    la: { name: "Laos" },
    lb: { name: "Lebanon" },
    lc: { name: "Saint Lucia" },
    li: { name: "Liechtenstein" },
    lk: { name: "Sri Lanka" },
    lr: { name: "Liberia" },
    ls: { name: "Lesotho" },
    lt: { name: "Lithuania" },
    lu: { name: "Luxembourg" },
    lv: { name: "Latvia" },
    ly: { name: "Libya" },
    ma: { name: "Morocco" },
    mc: { name: "Monaco" },
    md: { name: "Moldova" },
    me: { name: "Montenegro" },
    mf: { name: "Saint Martin" },
    mg: { name: "Madagascar" },
    mh: { name: "Marshall Islands" },
    mk: { name: "North Macedonia" },
    ml: { name: "Mali" },
    mm: { name: "Myanmar" },
    mn: { name: "Mongolia" },
    mo: { name: "Macau" },
    mp: { name: "Northern Mariana Islands" },
    mq: { name: "Martinique" },
    mr: { name: "Mauritania" },
    ms: { name: "Montserrat" },
    mt: { name: "Malta" },
    mu: { name: "Mauritius" },
    mv: { name: "Maldives" },
    mw: { name: "Malawi" },
    mx: { name: "Mexico" },
    my: { name: "Malaysia" },
    mz: { name: "Mozambique" },
    na: { name: "Namibia" },
    nc: { name: "New Caledonia" },
    ne: { name: "Niger" },
    nf: { name: "Norfolk Island" },
    ng: { name: "Nigeria" },
    ni: { name: "Nicaragua" },
    nl: { name: "Netherlands" },
    no: { name: "Norway" },
    np: { name: "Nepal" },
    nr: { name: "Nauru" },
    nu: { name: "Niue" },
    nz: { name: "New Zealand" },
    om: { name: "Oman" },
    pa: { name: "Panama" },
    pe: { name: "Peru" },
    pf: { name: "French Polynesia" },
    pg: { name: "Papua New Guinea" },
    ph: { name: "Philippines" },
    pk: { name: "Pakistan" },
    pl: { name: "Poland" },
    pm: { name: "Saint Pierre and Miquelon" },
    pn: { name: "Pitcairn Islands" },
    pr: { name: "Puerto Rico" },
    ps: { name: "Palestine" },
    pt: { name: "Portugal" },
    pw: { name: "Palau" },
    py: { name: "Paraguay" },
    qa: { name: "Qatar" },
    re: { name: "R\xE9union" },
    ro: { name: "Romania" },
    rs: { name: "Serbia" },
    ru: { name: "Russia" },
    rw: { name: "Rwanda" },
    sa: { name: "Saudi Arabia" },
    sb: { name: "Solomon Islands" },
    sc: { name: "Seychelles" },
    sd: { name: "Sudan" },
    se: { name: "Sweden" },
    sg: { name: "Singapore" },
    sh: { name: "Saint Helena" },
    si: { name: "Slovenia" },
    sj: { name: "Svalbard and Jan Mayen" },
    sk: { name: "Slovakia" },
    sl: { name: "Sierra Leone" },
    sm: { name: "San Marino" },
    sn: { name: "Senegal" },
    so: { name: "Somalia" },
    sr: { name: "Suriname" },
    ss: { name: "South Sudan" },
    st: { name: "S\xE3o Tom\xE9 and Pr\xEDncipe" },
    sv: { name: "El Salvador" },
    sx: { name: "Sint Maarten" },
    sy: { name: "Syria" },
    sz: { name: "Eswatini" },
    tc: { name: "Turks and Caicos Islands" },
    td: { name: "Chad" },
    tf: { name: "French Southern Territories" },
    tg: { name: "Togo" },
    th: { name: "Thailand" },
    tj: { name: "Tajikistan" },
    tk: { name: "Tokelau" },
    tl: { name: "Timor-Leste" },
    tm: { name: "Turkmenistan" },
    tn: { name: "Tunisia" },
    to: { name: "Tonga" },
    tr: { name: "Turkey" },
    tt: { name: "Trinidad and Tobago" },
    tv: { name: "Tuvalu" },
    tw: { name: "Taiwan" },
    tz: { name: "Tanzania" },
    ua: { name: "Ukraine" },
    ug: { name: "Uganda" },
    um: { name: "United States Minor Outlying Islands" },
    us: { name: "United States" },
    uy: { name: "Uruguay" },
    uz: { name: "Uzbekistan" },
    va: { name: "Vatican City" },
    vc: { name: "Saint Vincent and the Grenadines" },
    ve: { name: "Venezuela" },
    vg: { name: "British Virgin Islands" },
    vi: { name: "U.S. Virgin Islands" },
    vn: { name: "Vietnam" },
    vu: { name: "Vanuatu" },
    wf: { name: "Wallis and Futuna" },
    ws: { name: "Samoa" },
    ye: { name: "Yemen" },
    yt: { name: "Mayotte" },
    za: { name: "South Africa" },
    zm: { name: "Zambia" },
    zw: { name: "Zimbabwe" },
    eh: { name: "Western Sahara" },
    xk: { name: "Kosovo" }
  };
  var FlagDrag = class _FlagDrag {
    static setUpFlags() {
      const dropZones = document.getElementById("dropZones");
      const draggableList = document.getElementById("draggableCountries");
      const result = document.getElementById("result");
      dropZones.innerHTML = "";
      draggableList.innerHTML = "";
      result.innerHTML = "";
      const countries = Object.keys(countryNames).sort(() => Math.random() - 0.5);
      countries.length = 5;
      countries.forEach((countryCode) => {
        const zone = document.createElement("div");
        zone.className = "drop-zone";
        zone.dataset.country = countryCode;
        zone.innerHTML = `<span>Drop here: ${countryNames[countryCode].name}</span>`;
        zone.ondragover = (e) => e.preventDefault();
        zone.ondrop = function(e) {
          e.preventDefault();
          const draggedCode = e.dataTransfer.getData("text/plain");
          _FlagDrag.handleDrop(this, draggedCode, draggableList, result);
        };
        dropZones.appendChild(zone);
      });
      countries.sort(() => Math.random() - 0.5);
      countries.forEach((countryCode) => {
        const flag = document.createElement("img");
        flag.id = `flag-${countryCode}`;
        flag.src = `assets/flags/${countryCode}.webp`;
        flag.className = "draggable-flag";
        flag.draggable = true;
        flag.dataset.country = countryCode;
        flag.ondragstart = function(e) {
          e.dataTransfer.setData("text/plain", countryCode);
        };
        let touchClone = null;
        let lastTouch = null;
        flag.addEventListener("touchstart", function(e) {
          if (e.touches.length !== 1) return;
          flag.style.opacity = "0.6";
          lastTouch = e.touches[0];
          touchClone = flag.cloneNode(true);
          touchClone.style.position = "fixed";
          touchClone.style.pointerEvents = "none";
          touchClone.style.zIndex = "9999";
          touchClone.style.left = lastTouch.clientX - flag.width / 2 + "px";
          touchClone.style.top = lastTouch.clientY - flag.height / 2 + "px";
          touchClone.style.opacity = "0.8";
          document.body.appendChild(touchClone);
        });
        flag.addEventListener("touchmove", function(e) {
          if (!touchClone || e.touches.length !== 1) return;
          lastTouch = e.touches[0];
          touchClone.style.left = lastTouch.clientX - flag.width / 2 + "px";
          touchClone.style.top = lastTouch.clientY - flag.height / 2 + "px";
          e.preventDefault();
        }, { passive: false });
        flag.addEventListener("touchend", function(e) {
          flag.style.opacity = "";
          if (touchClone) {
            const dropZones2 = document.querySelectorAll(".drop-zone");
            let dropped = false;
            dropZones2.forEach((zone) => {
              if (dropped) return;
              const rect = zone.getBoundingClientRect();
              if (lastTouch && lastTouch.clientX >= rect.left && lastTouch.clientX <= rect.right && lastTouch.clientY >= rect.top && lastTouch.clientY <= rect.bottom) {
                _FlagDrag.handleDrop(zone, countryCode, draggableList, result);
                dropped = true;
              }
            });
            document.body.removeChild(touchClone);
            touchClone = null;
            lastTouch = null;
          }
        });
        draggableList.appendChild(flag);
      });
    }
    static handleDrop(zone, draggedCode, draggableList, result) {
      if (zone.classList.contains("correct")) return;
      const countryCode = zone.dataset.country;
      if (draggedCode === countryCode) {
        zone.classList.add("correct");
        zone.classList.remove("incorrect");
        zone.innerHTML = `<strong>Correct! ${countryNames[countryCode].name}</strong>`;
        zone.ondrop = (e) => e.preventDefault();
        try {
          storage.addCoins(1);
        } catch (e) {
        }
        const flagEl = document.getElementById(`flag-${countryCode}`);
        if (flagEl) flagEl.remove();
        if (draggableList.children.length === 0) {
          result.innerHTML = '<strong>All flags placed! Well done!</strong><br /><a href="javascript:FlagDrag.setUpFlags()">Play Again</a>';
        }
      } else {
        zone.classList.add("incorrect");
        zone.innerHTML = `<strong>Wrong! Try again for ${countryNames[countryCode].name}</strong>`;
      }
    }
  };
  var FlagDrag_default = FlagDrag;

  // scripts/entry.ts
  window.Storage = Storage_default;
  window.shopData = shopData_default;
  window.App = App_default;
  window.FlagDrag = FlagDrag_default;
  window.difficultyData = difficultyData;
  return __toCommonJS(entry_exports);
})();
//# sourceMappingURL=bundle.js.map
