const cartLink = document.querySelector(".menu__link_cart")
const modal = document.querySelector('.modal')

cartLink.addEventListener("click", () => {modal.classList.add("visible")})
document.addEventListener("click", (event) => { 
    if (!modal.contains(event.target) && event.target !== cartLink) {
        modal.classList.remove('visible')
    } 
 }  )

