
// import { menu, favorite, main, person, moreoptions, closemenu, contentSearch, inputSearch,  searchIcon, buy, favPage } from "../js/module/refs.js"

const createElement = (tag, className) =>{
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const main = createElement('main', 'main')
const body = document.querySelector('body').appendChild(main)

const images = [
    
    "url('https://img.ltwebstatic.com/images3_pi/2022/09/23/1663897087abeced1089303adc8c2e94fe684a4632_thumbnail_405x552.webp')",
    "url('https://img.ltwebstatic.com/images3_pi/2022/08/31/1661875250461190540124b4f44c2da8112f5d8073_thumbnail_405x552.webp')",
    "url('https://img.ltwebstatic.com/images3_pi/2020/12/09/1607481832386c7359a92c5fa7d801ccab8f31144e_thumbnail_405x552.webp')",
    "url('https://img.ltwebstatic.com/images3_pi/2021/06/17/162389276905c8ad5db571ea8a2be428e248f345a9_thumbnail_405x552.webp')",
    "url('https://img.ltwebstatic.com/images3_pi/2022/03/23/1648037329ef61759933a2e45c802c504040f0dd51_thumbnail_405x552.webp')",
    "url('https://img.ltwebstatic.com/images3_pi/2021/12/27/16405850862c25c272a56425e1d7cb0beef6f6c925_thumbnail_405x552.webp')",
]

const block = () => {

    const section = createElement('div', 'section')
    main.appendChild(section)

    const addImagesInDiv = () => {
        
        section.innerHTML = images.map((image) => `
        
            <div style="background-image: ${image};"></div>

        `).join('');
    }
    addImagesInDiv();
}
block();


