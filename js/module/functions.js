import { menu, favorite, main, person, moreoptions, closemenu, contentSearch, inputSearch,  searchIcon, buy, favPage, footer } from "./refs.js"


export function menuclickFunc(){

    if(moreoptions.style.transform = 'translate(-340px, 0px)'){
        moreoptions.style.transform = 'translate(0px, 0px)'
        moreoptions.style.transition = 'all .4s'
        main.style.transform = 'translate(0px, 85px)'
        moreoptions.style.visibility = 'visible'
    }
    else {
        moreoptions.style.transform = 'translate(-340px, 0px)'
        moreoptions.style.visibility = 'hidden' 
    }
}

export function favoriteFunc(){
 
    
    if(favPage.style.transform == 'translate(0px, 0px)'){

        favPage.style.transform = 'translate(0px, 800px)'
        favPage.style.visibility = 'hidden'
    }
    else {
        
        favPage.style.visibility = 'visible'
        favPage.style.transform = 'translate(0px, 0px)'
    }
}

export function closemenuFunc(){

    if(moreoptions.style.transform = 'translate(-340px, 0px)'){

        moreoptions.style.visibility = 'hidden'
        moreoptions.style.transform = 'translate(-300px, 0px)'
        main.style.transform = 'translate(0px, 0px)'
    }
}

export function searchFunc(){
    
    if (contentSearch.style.visibility == 'visible'){
        
        inputSearch.style.visibility = 'hidden'
        inputSearch.style.border = 'none'
        contentSearch.style.width = '0px'
        contentSearch.style.border = '1px solid #00000000'
        contentSearch.style.visibility = 'hidden'
        contentSearch.style.right = '5em'
    }
    else{
        
        inputSearch.style.visibility = 'visible'
        inputSearch.style.border = '1px solid #ffffff04'
        contentSearch.style.width = '85%'
        contentSearch.style.border = '1px solid #00000081'
        contentSearch.style.backgroundColor = '#fff'
        contentSearch.style.visibility = 'visible'
        contentSearch.style.right = '1.9em'
    }
}