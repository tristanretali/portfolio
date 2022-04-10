/* Preloader */
const loader = document.querySelector(".loader");

window.addEventListener("load", fadeOut);

function fadeOut(){
    loader.classList.add("disapear");
}

/* All const for the nav js of my portfolio */
const hamburgerButton = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");
const hideNav = document.querySelector(".nav");
const hideContact = document.querySelector(".contact");
const hideMail = document.querySelector(".mail");

/* responsive for navbar */
hamburgerButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hideNav.classList.toggle('newheight');
})

/* Hide nav with scroll up and scroll down */
let oldScrollY = window.scrollY;

window.addEventListener("scroll", scrollHideNav);

function scrollHideNav(){
    if(oldScrollY < window.scrollY){
        hideNav.classList.add("nav_hidden")
    }else{
        hideNav.classList.remove("nav_hidden");
    }
    if (oldScrollY >= 100) {
        hideContact.classList.add("contact_hidden");
        hideMail.classList.add("mail_hidden");
    } else {
        hideContact.classList.remove("contact_hidden");
        hideMail.classList.remove("mail_hidden");
    }
    oldScrollY = window.scrollY;
}

/* Hide and show projects for each programmation languages */

/*  Hide and show Java project */ 
const javaZone = document.querySelector("#java_zone");
/*const javaProjectArea = document.getElementById("java");*/
const showJavaProjects = document.querySelector("#java_area");

javaZone.addEventListener("mouseover", () => {
    showJavaProjects.style.display = "flex";
    javaZone.style.backgroundColor = "#d7d6ea";
})

javaZone.addEventListener("mouseout", () => {
    showJavaProjects.style.display = "none";
    javaZone.style.backgroundColor = "#13222C";  
})

/* Hide and show HTML\CSS projects */
const htmlZone = document.querySelector("#html_zone");
const showHtmlProjects = document.querySelector("#html_css_area");

htmlZone.addEventListener("mouseover", () => {
    showHtmlProjects.style.display = "flex";
    htmlZone.style.backgroundColor = "#d7d6ea";
})

htmlZone.addEventListener("mouseout", () => {
    showHtmlProjects.style.display = "none";
    htmlZone.style.backgroundColor = "#13222C" ;  
})

/* hide and show SQL projects */
const sqlZone = document.querySelector("#sql_zone");
const showSqlProjects = document.querySelector("#sql_area");

sqlZone.addEventListener("mouseover", () => {
    showSqlProjects.style.display = "flex";
    sqlZone.style.backgroundColor = "#d7d6ea";
})

sqlZone.addEventListener("mouseout", () => {
    showSqlProjects.style.display = "none";
    sqlZone.style.backgroundColor = "#13222C";  
})

/* Hide and show bash projects */ 

const bashZone = document.querySelector("#bash_zone");
const showBashProjects = document.querySelector("#bash_area");

bashZone.addEventListener("mouseover", () => {
    showBashProjects.style.display = "flex";
    bashZone.style.backgroundColor = "#d7d6ea";
})

bashZone.addEventListener("mouseout", () => {
    showBashProjects.style.display = "none";
    bashZone.style.backgroundColor = "#13222C";  
})

