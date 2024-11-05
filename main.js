const body = document.getElementById("body")
const div_tag = document.createElement("div")
const block_one = document.createElement("div")
const block_two = document.createElement("div")
const block_three = document.createElement("div")
const block_four = document.createElement("div")
const button = document.createElement("button")
button.textContent = "bosing"

body.style = "width:100%; height:100vh; background-color: black; display:flex; align-items: center; justify-content: center;"
div_tag.style = "width:700px; height:400px; background-color: blueviolet; display:flex; align-items: center; justify-content:space-evenly;"
block_one.style = "width:100px; height:220px; background-color: orange; border-radius: 20px; border:2px solid black;"
block_two.style = "width:100px; height:300px; background-color: orange; border-radius: 20px; border:2px solid black;"
block_three.style = "width:100px; height:100px; background-color: orange; border-radius: 20px; border:2px solid black;"
block_four.style = "width:100px; height:200px; background-color: orange; border-radius: 20px; border:2px solid black;"
button.style = "width:200px; height:30px; margin-left:20px;"


body.appendChild(div_tag)
body.appendChild(button)
div_tag.appendChild(block_one)
div_tag.appendChild(block_two)
div_tag.appendChild(block_three)
div_tag.appendChild(block_four)

button.addEventListener("click", ()=>{
    if (div_tag.style.display === 'none') {
        div_tag.style.display = 'flex';
    } else {
        div_tag.style.display = 'none';
    }
})