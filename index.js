const titleAndIcon = document.getElementsByClassName("title-and-icon");
const ans = document.getElementsByClassName("ans");
const icon = document.getElementsByClassName("icon");

    
for (let i =0; i < titleAndIcon.length; i++){
    // Asegurar que los elementos sean enfocables con tabindex
    titleAndIcon[i].setAttribute("tabindex", "0");


    titleAndIcon[i].addEventListener("click", () =>{
    
        if (ans.item(i).classList.contains("hide")){
            ans.item(i).classList.toggle("show");
            ans.item(i).classList.remove("hide");
            icon.item(i).src = "./assets/images/icon-minus.svg"
        }
        else{   
            ans.item(i).classList.toggle("hide");
            ans.item(i).classList.remove("show");
            icon.item(i).src = "./assets/images/icon-plus.svg"          
        }       
    })

    titleAndIcon[i].addEventListener("keydown", (event) => {
        event.preventDefault()
        if (event.key === "Enter" || event.key === " "){
            
            if (ans.item(i).classList.contains("hide")){
            ans.item(i).classList.toggle("show");
            ans.item(i).classList.remove("hide");
            icon.item(i).src = "./assets/images/icon-minus.svg"
            }
            else{
            ans.item(i).classList.toggle("hide");
            ans.item(i).classList.remove("show");
            icon.item(i).src = "./assets/images/icon-plus.svg"
            }
        }

    })

   titleAndIcon[i].addEventListener("keydown", (event) => {
        if (event.key === "ArrowDown") {
            let nextIndex = i + 1;
            if (nextIndex < titleAndIcon.length) {
                titleAndIcon[nextIndex].focus(); // Mueve el foco al siguiente elemento
            }
        }

        if (event.key === "ArrowUp") {
            let prevIndex = i - 1;
            if (prevIndex >= 0) {
                titleAndIcon[prevIndex].focus(); // Mueve el foco al elemento anterior
            }
        }
    });



    
}


    





