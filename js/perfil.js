
import { home, fav, menu, closemenu} from "./module/refs.js"

import { menuclickFunc, favoriteFunc, closemenuFunc } from "./module/functions.js";

menu.addEventListener('click', menuclickFunc)

closemenu.addEventListener('click', closemenuFunc)

// searchIcon.addEventListener('click', (event) => {})

fav.addEventListener('click', favoriteFunc)

// person.addEventListener('click', () => {

    // window.location = './perfil.html'
// })

// buy.addEventListener('click', () => {

    // window.location = './buy.html'
// })

home.addEventListener('click', () => window.location = './index.html');
