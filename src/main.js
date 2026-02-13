/*
import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
*/

//WIP: Import race pictures

window.onload = function() {
    const thumbnails = document.getElementById("raceThumbnails");
    raceThumbnails.addEventListener("click", changeRaceThumbnailAndPicture);
}

const changeRaceThumbnailAndPicture = function(leftClick) {
    changeThumbnail(leftClick);
    const thumbnailId = getRaceThumbnailId(leftClick);
    changeRacePicture(leftClick, idMiniatura);
}

const changeThumbnail = function(leftClick) {
    // 1. Deselect current 'activeThumb'
    let previousThumbnails = document.getElementById("raceThumbnails").getElementsByClassName("activeThumb");
    console.debug(previousThumbnails);

    
    // if to control that this isn't the first selection ever,
    // [0] because there should be only one pic
    if (previousThumbnails.length != 0) { 
        previousThumbnails[0].classList.toggle("activeThumb"); 
    }

    // 2. And then change activePicture
    leftClick.target.classList.toggle("activeThumb");
}

const getRaceThumbnailId = function(leftClick) {
    let thumbnailId = document.getElementById("raceThumbnails").getElementsByClassName("activeThumb")[0].id;
    return thumbnailId;
}

const changeRacePicture = function(evento, idMiniatura) {
    // 1. Get element
    let picture = document.getElementById("racePicture").getElementsByTagName("img");

    // 2. Cambiar atributos (src, alt, title)
    // elemento.setAttribute(“nombreAtributo”, “nuevoValor”)
    // [0] porque solo debería ser una en el array/collection picture
    let ruta = "./public/img/";
    let descripcion = "";

    // WIP:

    if (idMiniatura == "miniatura-pichu") {
        ruta += "pichu_grande.png";
        descripcion = "Pichu";
    } else if (idMiniatura == "miniatura-pikachu") {
        ruta += "pikachu_grande.png";
        descripcion = "Pikachu";
    } else if (idMiniatura == "miniatura-raichu") {
        ruta += "raichu_grande.png";
        descripcion = "Raichu";
    }

    picture[0].setAttribute("src", ruta);
    picture[0].setAttribute("alt", descripcion);
    picture[0].setAttribute("title", descripcion);

}