export default class Slide{
    constructor(img, point, left, right){
        this.img = document.querySelectorAll(img);
        this.point = document.querySelectorAll(point);
        // this.left = document.querySelector(left);
        // this.right = document.querySelector(right);
        this.para
    }
    addEvent(){
        // this.right.addEventListener("click",()=> {
        //     this.forward()
        // })
        // this.left.addEventListener("click",()=> {
        //     this.backward()
        // })
        this.point.forEach((item, index)=> {
            item.addEventListener('click', ()=>{
                this.showImg(index)            
            })
        })
        this.img[0].classList.add("active")         
        this.changePointOfClick(0)
        this.changeImage()
    }

    // backward(){      
        
    //     this.img.forEach(item => {
    //     item.classList.remove('active')
    //     })       
    //     this.cont    
    //     this.cont--
    //     if(this.cont<0)this.cont=5
    //     this.img[this.cont].classList.add("active")
    //    clearInterval(this.stopSlide)
    //     this.changeImage()
    //    this.changePointOfClick(this.cont)      
    // }
    // forward(){      
    //     this.img.forEach(item => {
    //     item.classList.remove('active')
    //     })       
    //     this.cont    
    //     this.cont++   
    //     if(this.cont>5)this.cont=0
    //     this.img[this.cont].classList.add("active")
    //    clearInterval(this.stopSlide)
    //     this.changeImage()
    //    this.changePointOfClick(this.cont)     
      
    // }

    showImg(index){                         
        this.img.forEach(item => {
            item.classList.remove('active')
        })      
       this.cont = index
        this.img[index].classList.add("active")
       clearInterval(this.stopSlide)
       this.changeImage()
       this.changePointOfClick(index)
    }

    changeImage(){      
        if(this.cont==undefined)this.cont=0;      
               this.stopSlide = setInterval(()=> {
            this.img.forEach(item => {
                item.classList.remove('active')
            })
            this.img[this.cont].classList.add("active")
            this.changePointOfClick(this.cont)
            this.cont++
            if(this.cont>3)this.cont = 0
        },3000)       
    }

    changePointOfClick(x){      
        this.point.forEach(item=> {
            item.classList.remove("change-color")
        })
        this.point[x].classList.add("change-color")    }

    init(){
      this. addEvent()      
    }

}
/*
 SlideShow
 Troca o array de imagens que é capturado pelo this.img e usa o this.point como controlador 
 das imagens. Ficar atento ao this.img.length para adequar a condicional do changeImage conforma a
 quantidade de controles e imagens Os botões de para frente ou para trás devem ser
alçados ao this.left e this.right
*/
