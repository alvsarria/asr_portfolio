const navbarIconElement1 = document.querySelector(".nav-baricon");
const navbarIconElement2 = document.querySelector(".nav-baricon1");
const navElement = document.querySelector("nav");
const buttonElement = document.querySelectorAll("button");

navbarIconElement1.addEventListener("mouseenter", functionIn);
navbarIconElement2.addEventListener("mouseenter", functionIn);
navElement.addEventListener("mouseleave", functionOut);

buttonElement.forEach(element => {
    element.addEventListener("click", () => {
        element.classList.add('click')
        if(element.className.includes("resume")){
            console.log(element.className)
            element.classList.remove("resume-button")
            element.classList.add("projects-button")
        } else{
            console.log(element.className)
            element.classList.remove("projects-button")
            element.classList.add("resume-button")
        };
        setTimeout(() => {
            element.classList.remove('click');
            if(element.className.includes("projects")){
                element.classList.remove("projects-button")
                element.classList.add("resume-button")
            } else{
                element.classList.remove("resume-button")
                element.classList.add("projects-button")
            };
        }, 250);
    });
});

function functionIn() {  // not needed since item is already global, 
    navElement.classList.remove('slideOut');
    navElement.classList.add('slideIn');
    navElement.classList.remove('hidden');
    navbarIconElement1.classList.add('hidden');
    navbarIconElement2.classList.add('hidden');
};

function functionOut() {  // not needed since item is already global, 
    navElement.classList.remove('slideIn');
    navElement.classList.add('slideOut');
    setTimeout(() => {
        navElement.classList.add('hidden');
        navbarIconElement1.classList.remove('hidden');
        navbarIconElement2.classList.remove('hidden');
    }, "299.9");
};

function clickButton() {

}