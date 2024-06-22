import hamburgerMenu from "./menu-hamburguesa.js"
import carrusel from "./script.js"


document.addEventListener('DOMContentLoaded', (e)=>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a")
    carrusel()
})