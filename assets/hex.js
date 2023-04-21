const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click", function() {
let hexColor = '#';
for (let i = 0; i<6; i++){
    hexColor += hex[getRandomNumber()];
}

color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}


























// btn.addEventListener('click',function(){
//     // gerar numero aleatório between 0-3 colors
//     const randomNumber = getRandomNumber();
//     console.log(randomNumber.toFixed(0));

//     document.body.style.backgroundColor = colors[randomNumber];
//     color.textContent = colors[randomNumber];

// });

// function getRandomNumber() {
//     return Math.floor(Math.random()* colors.length);
// }