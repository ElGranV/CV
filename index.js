let app_images  = document.querySelectorAll(".image-panel img")
for (let i = 0; i<app_images.length; i++)
{
    app_images[i].classList.add("shadow")
}

let image_panel = document.getElementById("image-panel");
image_panel.addEventListener("click", ()=>{
    image_panel.style.display = "none"
})

let trigger_panel = document.getElementById("trigger-panel");
trigger_panel.addEventListener("click", ()=>{
    image_panel.style.display = "flex"
})
