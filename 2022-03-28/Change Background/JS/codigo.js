
let colors = ['yellow','red','blue','green','purple'];

let button = document.getElementById("button");

function mudar() {

var randomColor = colors[Math.floor(Math.random()*colors.length)]

let corpo = document.getElementById('corpo');

corpo.style.background = randomColor;

}