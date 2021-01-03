export default class DropDown{    
    constructor(action){
        this.action = document.querySelectorAll(action)        
    }

    addEvent(){
        this.action.forEach(item=> {
            item.addEventListener('mouseover', () => {
                this.show(item)
            })
        })     
        this.action.forEach(item=> {
            item.addEventListener('mouseout', () => {
                this.goOut(item)
            })
        })         
    }

    show(x){       
        console.log(  x.children[0])
        x.children[0].classList.add("active")
    }
    goOut(x){              
        x.children[0].classList.remove("active")
    }

    init(){
         this.addEvent()
        // const ul = this.action[2].nextElementSibling       
    }
}

// DropDown
// Essa classe mostra e esconde os submenus que deve estar dentro da tag do menu
// principal. O parametro action corresponde a este menu que dispara os submenus 