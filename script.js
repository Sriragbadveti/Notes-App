let container  = document.querySelector(".container");
let button = document.querySelector(".btn");
let notescont = document.querySelector(".notescontainer");
let inputbox  = document.querySelectorAll(".inputbox");
let mainimg = document.querySelector(".mainimg");

button.addEventListener("click" , function (){
    let para = document.createElement("p");
    let img  = document.createElement("img");
    para.className = "inputbox";
    para.setAttribute("contenteditable" , "true") ;
    img.src = "delete.png";
    notescont.appendChild(para).appendChild(img);
    
})

notescont.addEventListener("click"  , function(dets){

    if(dets.target.tagName === "IMG"){
        dets.target.parentElement.remove();
    }
})

