const togl = document.querySelector('.model')
const toga = document.querySelector('.toglmod')
togl.addEventListener("mouseover",function(){
    toga.classList.remove('toglmod')
    toga.classList.add('toglmod-activ')
togl.addEventListener('mouseleave',function(){
    toga.classList.remove('toglmod-activ')
    toga.classList.add('toglmod')
})
console.log(toga)

})
