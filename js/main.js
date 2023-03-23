// get the inputs 
let emailInput = document.querySelector("#email");
let submit = document.querySelector("#submit");
// this function to stop submit if the email's value not matching the match
submit.addEventListener("click", function(e){
    const valid = false;
    const matching = /\w+@\w+\.\w+/;
    if (emailInput.value !== "" && emailInput.value.match(matching)){
        valid = true;
    };
    if(valid === false){
        emailInput.style.border= "2px solid red";
        e.preventDefault();
    }
});
// this function bec when click out the input or button move border
window.onclick = function(e){
    if(e.target == emailInput || e.target !== submit){
        emailInput.style.border= "none";
    };
};

let getBody = document.body,
    section = document.querySelector("#section"),
    footer= document.querySelector("footer");
let windowWidth = window.innerWidth; // get window width 

// change font size and width when change screen


if(windowWidth < 1365.8 && windowWidth > 992){
    getBody.style.fontSize= "15px";
    section.style.maxWidth= windowWidth;
    footer.style.maxWidth= windowWidth;
};
if(windowWidth > 1439.8){
    getBody.style.fontSize= "18px";
    section.style.maxWidth= "1440px";
    footer.style.maxWidth= "1440px"
};
if(windowWidth > 1699.8){
    getBody.style.fontSize= "20px";
    section.style.maxWidth= "1700px";
    footer.style.maxWidth= "1700px";
};
if(windowWidth > 1999.8){
    getBody.style.fontSize= "23px";
    section.style.maxWidth= "2000px"
};
if(windowWidth > 2299.8){
    getBody.style.fontSize= "26px";
    section.style.maxWidth= "2300px"
    footer.style.maxWidth= "2300px";
};

// get hamburger's elements
let navBar = document.querySelector("nav"),
    signButton = document.querySelector(".sign"),
    burger = document.querySelector(".hamburger"),
    lineOne = document.querySelector(".bar1"),
    lineTwo = document.querySelector(".bar2"),
    lineThree = document.querySelector(".bar3"),
    infoArea= document.querySelector(".info"),
    imageArea = document.querySelector(".image");

if(windowWidth < 991.98){
    signButton.remove();
    navBar.appendChild(signButton);
    imageArea.remove();
    infoArea.before(imageArea);
}

// handel small dvc 

// function for closs burger menu and burger icon
function close (){
    if(lineTwo.className.match("bar2")){
        lineTwo.className= "opacity";
    } else {
        lineTwo.className= "bar2";
    }
    if(lineOne.className.match("bar1") && lineThree.className.match("bar3")){
        lineOne.className="rotate1"
        lineThree.className= "rotate2";
    } else {
        lineOne.className="bar1"
        lineThree.className= "bar3";
    }
}
// add event to call function and make it play 
burger.addEventListener("click", function() {
    burger.style.justifyContent= "center";  
    navBar.classList.toggle("open");
    close();
});

// add event when click on links
let navBarLinks = document.querySelectorAll(".links a");
navBarLinks.forEach(function(el){
    el.addEventListener("click", ()=>{
        navBar.classList.toggle("open");
        close();
    });
});