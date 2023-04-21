const colors = ["green", "red", "rgba(133,133,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color')

btn.addEventListener('click',function(){
    // gerar numero aleatório between 0-3 colors
    const randomNumber = getRandomNumber();
    console.log(randomNumber.toFixed(0));

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

});

function getRandomNumber() {
    return Math.floor(Math.random()* colors.length);
}