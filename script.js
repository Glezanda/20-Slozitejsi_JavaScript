console.log("JavaScript funguje!");
 let visualText = document.querySelector(".hlavni-odstavec");
 visualText.textContent = "Home web";

 let visualniFoto = document.querySelector(".moje-foto");
 visualniFoto.src = "img/druhe-foto.jpeg";

let colorV = document.querySelector(".predstaveni-se");
colorV.style.color = " blue";

let viText = document.querySelector(".vzdelani");
 viText.textContent = "Školy";

function pridejZvzrazneni(){ 
    let trida = document.querySelector(".tlacitko1");
    trida.classList.add("zvyrazneny");
 }
