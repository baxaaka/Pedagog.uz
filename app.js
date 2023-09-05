const burgerMenu =  document.querySelector(".burgerMenu")
const closeBtn =  document.querySelector(".closeBtn")

const burgerBtn =  document.querySelector(".burgerBtn")

closeBtn.addEventListener("click" ,()=>{
    burgerMenu.style.display="none"
    burgerBtn.style.display="block"


})

burgerBtn.addEventListener("click" ,()=>{
    burgerBtn.style.display="none"
    burgerMenu.style.display="block"
})