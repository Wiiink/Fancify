const text = document.getElementById("text");
const big = document.querySelector("#bigger");
const fancy = document.getElementById("fancy");
const boring = document.getElementById("boring");
const defColor = document.getElementById("text").style.color;
const moo = document.getElementById("moo");


const bigger = () => {
  alert("Hello, world!");
  text.style.fontSize = "24pt";
};


big.onclick = () => {
  bigger();
};


const fancify = () => {
  alert("fancified!");
  text.style.fontWeight = "bold";
  text.style.color = "blue";
  text.style.textDecoration = "underline";
};


fancy.onchange = (event) => {
  if (event.target.checked) {
    fancify();
  }
};


boring.onchange = (event) => {
  if (event.target.checked) {
    text.style.fontWeight = "normal";
    text.style.color = "black";
    text.style.textDecoration = "none";
  }
};


moo.onclick = () => {
  alert("moo");
  var newText = text.value.toUpperCase();
  var sentences = newText.split(".");
  text.value = sentences.join("-Moo.");
};
