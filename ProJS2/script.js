const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const voilet = document.querySelector(".voilet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");
const blue = document.querySelector(".blue");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(red).backgroundColor;
}

var color = getBGColor(pink);

pink.addEventListener("click", () => {
    center.style.background = pink;
})

const magicColorChanger = (element, color) => {
    pink.addEventListener("mouseenter", () => {
        center.style.background = pink;
    }) 
}

magicColorChanger(red, getBGColor(red));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(voilet, getBGColor(voilet));
magicColorChanger(orange, getBGColor(orange));
magicColorChanger(pink, getBGColor(pink));
magicColorChanger(blue, getBGColor(blue));