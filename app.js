const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', () => {
    // obtener un # rondom entre 0-3()para el array
    
    let getRandomColor = Math.floor(Math.random()*colors.length)
        document.body.style.backgroundColor = colors[getRandomColor]
        color.textContent = colors[getRandomColor];
    
  
});

