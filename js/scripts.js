let col = document.querySelectorAll(".chose li img")

let ColorIphone = document.querySelector(".left img")





function change (color,img)
{
    document.documentElement.style.setProperty("--g-color" , color )
    ColorIphone.src = img

}



col.forEach((e)=>{
    e.addEventListener("click" , (C)=>{
     change(C.target.dataset.color , C.target.src)
    })
})
