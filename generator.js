const boton = document.querySelector(".boton")
const codigo = document.querySelector(".codigo")
const body = document.querySelector("body")


boton.addEventListener("click", generar)

function generar(){
    
    let blue = Math.floor(Math.random()*255)
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)

    codigo.innerHTML = `rgb(${red},${green},${blue})`
   
   body.style.backgroundColor = codigo.innerHTML


}