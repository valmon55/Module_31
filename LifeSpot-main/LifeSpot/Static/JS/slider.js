let sliderPics = document.querySelectorAll(".pic-slider");
    //document.getElementsByClassName("pic-slider");
let dots = document.querySelectorAll(".dot");
//document.getElementsByClassName("dot");
let leftButton = document.getElementById("navButtonLeft");
let rightButton = document.getElementById("navButtonRight");

dots[0].classList.add("active-pic-slider");
sliderPics[0].classList.add("active-pic-slider");

let counter = 0;

for(let i = 0; i < dots.length; i++)
{
    dots[i].addEventListener("click", () => {
        for(let k = 0; k < dots.length; k++)
        {
            dots[k].classList.remove("active-pic-slider");
            sliderPics[k].classList.remove("active-pic-slider")
        }
        counter = i;
        sliderPics[counter].classList.add("active-pic-slider");
        dots[counter].classList.add("active-pic-slider");
    })
}

leftButton.addEventListener("click", () => {
    for(let k = 0; k < dots.length; k++)
    {
        dots[k].classList.remove("active-pic-slider");
        sliderPics[k].classList.remove("active-pic-slider")
    }
    counter--;
    if(counter < 0){
        counter = sliderPics.length - 1;
    }
    sliderPics[counter].classList.add("active-pic-slider");
    dots[counter].classList.add("active-pic-slider");
})

rightButton.addEventListener("click", () => {
    for(let k = 0; k < dots.length; k++)
    {
        dots[k].classList.remove("active-pic-slider");
        sliderPics[k].classList.remove("active-pic-slider")
    }
    counter++;
    if(counter >= sliderPics.length){
        counter = 0;
    }
    sliderPics[counter].classList.add("active-pic-slider");
    dots[counter].classList.add("active-pic-slider");
})