const chars = [
  { name: "复", roman: "Fù", spanish: "Complejo", category: "Otros" },
  { name: "制", roman: "Zhì", spanish: "Control", category: "Otros" },
  { name: "写", roman: "Xiě", spanish: "Escribir", category: "Verbos" },
  { name: "发", roman: "Fā", spanish: "Enviar", category: "Verbos" },
  { name: "复制", roman: "Fùzhì", spanish: "Copiar", img: "Fù Zhì", category: "Verbos" },
  { name: "好", roman: "Hǎo", spanish: "Bueno", category: "Adjetivos" },
  { name: "你", roman: "Nǐ", spanish: "Usted, Tú", category: "Pronombres" },
  { name: "见", roman: "Jiàn", spanish: "Ver", category: "Verbos" },
  { name: "再", roman: "Zài", spanish: "De nuevo", category: "Otros" },
  { name: "谢", roman: "Xiè", spanish: "Gracias", category: "Otros" },
  { name: "吗", roman: "Ma", spanish: "Usted", category: "Pronombres" },
  { name: "呢", roman: "Ne", spanish: "Que tal", category: "Saludos" },
  { name: "中", roman: "Zhōng", spanish: "En", category: "Otros" },
  { name: "文", roman: "Wén", spanish: "Texto", category: "Otros" },
  { name: "中文", roman: "Zhōngwén", spanish: "Chino", img: "Zhōng Wén", category: "Otros" },
  { name: "你好", roman: "Nǐ hǎo", spanish: "Hola", img: "Nǐ Hǎo", category: "Saludos" },
  { name: "再见", roman: "Zàijiàn", spanish: "Adios", img: "Zài Jiàn", category: "Saludos" },
  { name: "谢谢", roman: "Xièxiè", spanish: "Gracias", img: "Xiè Xiè", category: "Otros" },
  { name: "你好吗", roman: "Nǐ hǎo ma", spanish: "Como estas", img: "Nǐ Hǎo Ma", category: "Saludos" },
  { name: "好你呢", roman: "Hǎo nǐ ne", spanish: "Que tal tu", img: "Hǎo Nǐ Ne", category: "Saludos" },
  { name: "早", roman: "Zǎo", spanish: "Temprano", category: "Fecha" },
  { name: "安", roman: "Ān", spanish: "Un", category: "Otros" },
  { name: "早安", roman: "Zǎo ān", spanish: "Buenos dias", description: "", img: "Zǎo Ān", category: "Saludos" },
  { name: "日", roman: "Rì", spanish: "Día", category: "Fecha" },
  { name: "周", roman: "Zhōu", spanish: "Semana", category: "Fecha" },
  { name: "月", roman: "Yuè", spanish: "Mes", category: "Fecha" },
  { name: "一", roman: "Yī", spanish: "Uno", category: "Números" },
  { name: "二", roman: "Èr", spanish: "Dos", category: "Números" },
  { name: "三", roman: "Sān", spanish: "Tres", category: "Números" },
  { name: "四", roman: "Sì", spanish: "Cuatro", category: "Números" },
  { name: "五", roman: "Wǔ", spanish: "Cinco", category: "Números" },
  { name: "我", roman: "Wǒ", spanish: "Yo", category: "Pronombres" },
  { name: "他", roman: "Tā", spanish: "Él, ella", category: "Pronombres" },
  { name: "们", roman: "Men", spanish: "Nosotros", category: "Pronombres" },

  //{ name: "", roman: "", spanish: "", category: ""},
];

var category = "Todos";
const filter_button = document.querySelector("#filter");
var filter_value = filter_button.getAttribute("data-category");
const filter_content = document.querySelector("#filter-content");

const txt = document.querySelector("#search-txt");
const btn = document.querySelector("#erase-btn");
const result = document.querySelector("#search-result");
const all = document.querySelector("#all-content");

filter_button.addEventListener("click", function () {
  if (filter_button.classList.contains("toggle")) {
    filter_button.classList.remove("toggle");
  } else {
    filter_button.classList.add("toggle");
  }
});

//

//

//

//

//

const showAll = () => {
  if (category === "Todos") {
    category = "";
  }
  all.innerHTML = "";

  document.querySelector("#counter").innerHTML = chars.length;

  chars.sort((a, b) => (a.spanish > b.spanish ? 1 : b.spanish > a.spanish ? -1 : 0));

  var counter = 0;

  for (let char of chars) {
    let img = "";

    if (char.img !== null && char.img !== undefined) {
      str = char.img.split(" ");

      img += "<span>";

      for (let i = 0; i < str.length; i++) {
        img += `<img src="assets/img/chars/${str[i]}.gif">`;
      }

      img += "</span>";
    } else {
      img = `<img src="assets/img/chars/${char.roman}.gif">`;
    }

    if (char.category.indexOf(category) !== -1) {
      counter++;

      all.innerHTML += `
  
      <div class="character" data-src="${char.roman}">
        <img class="play" src="assets/icons/volume_up-24px.svg" onclick="this.classList.add('toggle'); soundParent = this.parentElement; playSound();">
        ${img}
        <div>
          <div>
            <h1>${char.name}</h1>
            <h2>${char.roman}</h2>
          </div>
          <h3>${char.spanish}</h3>
          <p>Categoría: ${char.category}</p>
        </div>
      </div>
  
      `;
    }
    document.querySelector("#counter").innerHTML = counter;
  }
};

const setCategory = () => {
  document.querySelector("#filter-content").innerHTML = category;
  filter_value = category;
  showAll();
};

setCategory();

document.querySelector("#categories").innerHTML = `<div onclick="category = this.innerHTML; setCategory();">Todos</div>`;

const addCategory = (e) => {
  categories.push(e);

  document.querySelector("#categories").innerHTML += `<div onclick="category = this.innerHTML; setCategory();">${e}</div>`;
};

//

//

//

const doNothing = () => {};

var categories = [];
for (let index = 0; index < chars.length; index++) {
  if (chars[index].category) {
    let element = chars[index].category;
    categories.indexOf(element) === -1 ? addCategory(element) : doNothing() /*  console.warn("This item already exists")*/;
  }
}

// condition === -1 ? do something : do the opposite;
// categories.indexOf(element) === -1 ? categories.push(element) : console.warn("This item already exists");

var soundParent;
var audio_ready = true;

function playSound() {
  src = soundParent.getAttribute("data-src");
  if (audio_ready) {
    var audio = new Audio(`assets/sounds/${src}.mp3`);
    audio.play();
    audio_ready = false;
    setTimeout(() => {
      document.querySelectorAll(".play.toggle")[0].classList.remove("toggle");
      audio_ready = true;
    }, 800);
  }
}

const normalize = (function () {
  var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇçĀāǎěēǐīōǒūǔ",
    to = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunnccAaaeeiioouu",
    mapping = {};

  for (var i = 0, j = from.length; i < j; i++) mapping[from.charAt(i)] = to.charAt(i);

  return function (str) {
    var ret = [];
    for (var i = 0, j = str.length; i < j; i++) {
      var c = str.charAt(i);
      if (mapping.hasOwnProperty(str.charAt(i))) ret.push(mapping[c]);
      else ret.push(c);
    }
    return ret.join("");
  };
})();
{
}
//ctrl + alt + L sobre variable para hacer un csl
//alt + shift + C para comentar todos los csl
//alt + shift + U para descomentar todos los csl
//alt + shift + D para eliminar todos los csl

var hi = 1 + 1;

const erase = () => {
  txt.value = "";
  filter();
};

const filter = () => {
  result.innerHTML = "<h1>Resultados</h1>";
  const text = txt.value.toLowerCase();
  for (let char of chars) {
    let name = char.name.toLowerCase();
    let spanish = char.spanish.toLowerCase();
    let norm_spanish = normalize(char.spanish.toLowerCase());
    let roman = char.roman.toLowerCase();
    let norm_roman = normalize(char.roman.toLowerCase());

    let img = "";

    chars.sort((a, b) => (a.spanish.length < b.spanish.length ? 1 : b.spanish.length < a.spanish.length ? -1 : 0));

    if (char.img !== null && char.img !== undefined) {
      str = char.img.split(" ");

      img += "<span>";

      for (let i = 0; i < str.length; i++) {
        img += `<img src="assets/img/chars/${str[i]}.gif">`;
      }

      img += "</span>";
    } else {
      img = `<img src="assets/img/chars/${char.roman}.gif">`;
    }

    if (text !== "") {
      if (
        name.indexOf(text) !== -1 ||
        roman.indexOf(text) !== -1 ||
        norm_roman.indexOf(text) !== -1 ||
        spanish.indexOf(text) !== -1 ||
        norm_spanish.indexOf(text) !== -1
      ) {
        result.innerHTML += `

            <div class="character" data-src="${char.roman}">
              <img class="play" src="assets/icons/volume_up-24px.svg" onclick="this.classList.add('toggle'); soundParent = this.parentElement; playSound();">
              ${img}
              <div>
                <div>
                  <h1>${char.name}</h1>
                  <h2>${char.roman}</h2>
                </div>
                <h3>${char.spanish}</h3>
                <p>Categoría: ${char.category}</p>
              </div>
            </div>
        `;
      }
    } else {
      result.innerHTML = "<p>No escribiste nada ಠ_ಠ</p>";
    }
  }

  if (result.innerHTML === "" || result.innerHTML === "<h1>Resultados</h1>") {
    result.innerHTML = "<p>No se encontraron resultados</p>";
  }
};

btn.addEventListener("click", erase);

txt.addEventListener("keyup", filter);
