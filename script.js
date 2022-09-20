// Preloader variable
const enterButton = document.querySelector(".open_portfolio");
const preloader = document.querySelector(".preloader");

// Home first line variable
const textFirstLine = document.querySelector('.first_line');
const myTextFirstLine = textFirstLine.textContent;
const splitTextFirstLine = myTextFirstLine.split ("");
let charFirstLine = 0;
textFirstLine.textContent = "";
let timerFirstLine = setInterval(onTickFirstLine, 60);

// Home second line variable
const textSecondLine = document.querySelector('.second_line');
const myTextSecondLine = textSecondLine.textContent;
const splitTextSecondLine = myTextSecondLine.split("");
let charSecondLine = 0;
textSecondLine.textContent = "";
let timerSecondLine = setInterval(onTickSecondLine, 60);

// Home third line variable
const textThirdLine = document.querySelector('.third_line');
const myTextThirdLine = textThirdLine.textContent;
const splitTextThirdLine = myTextThirdLine.split("");
let charThirdLine = 0;
textThirdLine.textContent = "";
let timerThirdLine = setInterval(onTickThirdLine, 60);

// Displaying all elements variable
const aboutSection = document.querySelector('#about_section');
const projectsSection = document.querySelector('.projects');
const footerArea = document.querySelector('.footer');

enterButton.addEventListener('click', function(event){
    preloader.classList.add("hidden");
    setTimeout(animFirstLine, 1000);
    setTimeout(animSecondLine, 2700);
    setTimeout(animThirdLine, 4000);
    aboutSection.style.display = "flex";
    projectsSection.style.display = "flex";
    footerArea.style.display = "flex";
})

function animFirstLine(){
    for(let i = 0; i< splitTextFirstLine.length; i++){
        textFirstLine.innerHTML += "<span>" + splitTextFirstLine[i] + "</span>"; 
    }
}

function animSecondLine(){
    for(let i = 0; i < splitTextSecondLine.length; i++){
        textSecondLine.innerHTML += "<span>" + splitTextSecondLine[i] + "</span>";
    }
}

function animThirdLine(){
    for(let i = 0; i < splitTextThirdLine.length; i++){
        textThirdLine.innerHTML += "<span>" + splitTextThirdLine[i] + "</span>";
    }
}

function onTickFirstLine(){
    const spanFirstLine = textFirstLine.querySelectorAll('span')[charFirstLine];
    spanFirstLine.classList.add('fade');
    charFirstLine++;
    if(charFirstLine == splitTextFirstLine.length){
        completeFirstLine();
        return; 
    }
}

function completeFirstLine(){
    clearInterval(timerFirstLine);
    timerFirstLine = null;
}

function onTickSecondLine(){
    const spanSecondLine = textSecondLine.querySelectorAll('span')[charSecondLine];
    spanSecondLine.classList.add('fade');
    charSecondLine++;
    if(charSecondLine == splitTextSecondLine.length){
        completeSecondLine();
        return;
    }
}

function completeSecondLine(){
    clearInterval(timerSecondLine);
    timerSecondLine = null;
}

function onTickThirdLine(){
    const spanThirdLine = textThirdLine.querySelectorAll('span')[charThirdLine];
    spanThirdLine.classList.add ('fade');  
    charThirdLine++;
    if(charThirdLine == splitTextThirdLine.length){
        completeThirdLine();
        return;
    }
}

function completeThirdLine(){
    clearInterval(timerThirdLine);
    timerThirdLine = null;
}



