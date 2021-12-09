const element = document.querySelector(".hamburger-menu");

// apri menù ad hamburgher
showElement = document.querySelector(".fa-bars");
showElement.addEventListener("click" , function(){

    element.className = element.classList + " active";

});

// chiudi menù ad hamburger
hideElement = document.querySelector(".close");
hideElement.addEventListener("click" , function(){

    element.className = "hamburger-menu";

});