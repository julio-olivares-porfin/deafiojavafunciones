let boxUno = document.querySelector('#caja-uno')
let boxDos = document.querySelector('#caja-dos')
let boxTres = document.querySelector('#caja-tres')
let boxCuatro = document.querySelector('#caja-cuatro')

boxUno.style.backgroundColor = 'blue'
boxDos.style.backgroundColor = 'red'
boxTres.style.backgroundColor = 'green'
boxCuatro.style.backgroundColor = 'yellow'

const changeBlack = (element) => element.style.backgroundColor = 'black'

const removeBlack = (element, color) => element.style.backgroundColor = color

boxUno.addEventListener('click', () =>{
  if(boxUno.style.backgroundColor === 'black'){
    removeBlack(boxUno,'blue')
  }else
    changeBlack(boxUno)
  }
)

boxDos.addEventListener('click', () =>{
  if(boxDos.style.backgroundColor === 'black'){
    removeBlack(boxDos,'red')
  }else{
    changeBlack(boxDos)
  }
})

boxTres.addEventListener('click', () =>{
  if(boxTres.style.backgroundColor === 'black'){
    removeBlack(boxTres, 'green')
  }else{
    changeBlack(boxTres)
  }
})

boxCuatro .addEventListener('click', () =>{
  if(boxCuatro.style.backgroundColor === 'black'){
    removeBlack(boxCuatro, 'yellow')
  }else{
    changeBlack(boxCuatro)
  }
})