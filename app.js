
const display = document.getElementsByClassName("img-display")

    display[0].style.right="0"

    function f1(){

    for (let i = 0; i < display.length; i++) {
        setTimeout(() => {
            display[1].style.right="0"

            setTimeout(() => {
                display[2].style.right="0"

                setTimeout(() => {
                    display[3].style.right="0"

                    setTimeout(() => {
                        display[4].style.right="0"

                        setTimeout(() => {
                            display[5].style.right="0"
                            
                            f2()

                        }, 2500);
            
                    }, 2500);
        
                }, 2500);
    
            }, 2500);

        }, 2500);
        
        function f2() {
            setTimeout(() => {
                display[5].style.right="-100%"
    
                setTimeout(() => {
                    display[4].style.right="-100%"
    
                    setTimeout(() => {
                        display[3].style.right="-100%"
    
                        setTimeout(() => {
                            display[2].style.right="-100%"
    
                            setTimeout(() => {
                                display[1].style.right="-100%"
                                
                                f1()
    
                            }, 2500);
                
                        }, 2500);
            
                    }, 2500);
        
                }, 2500);
    
            }, 2500);
        }
    }

    }

            // Slide Display



const modal = document.getElementsByClassName("modal")[0]
const source= document.getElementsByClassName("img-modal")[0]
const modalImg=document.getElementsByClassName("img-grid")

for (let i = 0; i < modalImg.length; i++) {
        modalImg[i].addEventListener("click", ()=>{
            modal.style.display="flex"
            modal.style.transform="scale(1)"
            source.src=modalImg[i].src
        })

        modal.addEventListener("click", ()=>{
            modal.style.display="none"
            modal.style.transform="scale(0)"
        })
}


            // Galeria

