const images = document.querySelectorAll("#gallery")
const modal = document.querySelector(".image-modal")
const backdrop = document.querySelector(".back-drop")
const modalImage = document.querySelector("#displayed-image")
// console.log(images)

images.forEach((img)=> {
    img.addEventListener("click", ()=>{
        console.log("Image name: " + img.src);
        openModal()
        modalImage.src = img.src
        document.body.style.overflow = 'hidden';
    })
})

backdrop.addEventListener("click", ()=>{
    closeModal()
})

function openModal(){
    modal.style.display = "inline"
    backdrop.style.display = "inline"
}

function closeModal(){
    modal.style.display = "none"
    backdrop.style.display = "none"
    document.body.style.overflow = 'visible';
}