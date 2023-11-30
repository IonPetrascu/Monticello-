const anchors = document.querySelectorAll("a[href*='#']")
console.log(anchors);

for(let anchor of anchors){
    anchor.addEventListener("click",function(event){
        event.preventDefault();
        const blockId = anchor.getAttribute("href")
        document.querySelector("" + blockId).scrollIntoView({
            behavior:"smooth",
            block:"start"
        })
    })
}

const header = document.getElementById("header");
const wrapper = document.querySelector(".wrapper")

window.addEventListener("scroll",()=>{
    if(window.scrollY > 150){
        header.classList.add("header-scroll")
        wrapper.classList.add("wrapper-scroll")
    }else{
        header.classList.remove("header-scroll")
        wrapper.classList.remove("wrapper-scroll")
    }
})
