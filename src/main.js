/*
import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
*/

window.onload = function() {
    const raceThumbnailList = document.getElementById('raceThumbnails');

    raceThumbnailList.addEventListener("click", handleRaceChange);
}

const handleRaceChange = function(leftClick) {
    // Avoid selecting things different to img (ul, li, p, etc.)
    if (leftClick.target.tagName.toLowerCase() == 'img') {
        changeRaceThumbnail(leftClick);

        const newRaceThumbnailId = document.getElementById("raceThumbnails").getElementsByClassName("activeRaceThumb")[0].id;
        console.log(`New race thumb selected: ${newRaceThumbnailId}`);

        changeRaceInfo(leftClick, newRaceThumbnailId);
    }
    
}

const changeRaceThumbnail = function(leftClick) {
    // 1. Deselect current activeRaceThumb
    const raceThumbnailElements = document.getElementById("raceThumbnails").querySelectorAll('img');
    console.warn(raceThumbnailElements);

    // for (let i = 0; i < raceThumbnailElements.length; i++) {
        // raceThumbnailElements[i].classList.toggle("activeRaceThumb");
    // }

    const previousRaceThumbnails = document.getElementById("raceThumbnails").getElementsByClassName("activeRaceThumb");
    console.debug(previousRaceThumbnails);

    // if to control that this isn't the first selection ever,
    // [0] because there should be only one pic
    if (previousRaceThumbnails.length != 0) { 
        previousRaceThumbnails[0].classList.toggle("activeRaceThumb"); 
    }

    // 2. And then change activeRaceThumb
    leftClick.target.classList.toggle("activeRaceThumb");

}

const changeRaceInfo = function(leftClick, raceThumbnailId) {
    const raceInfoList = document.getElementById("raceInfos").querySelectorAll("article");
    const currentActiveRaceInfo = document.getElementById("raceInfos").getElementsByClassName("activeRaceInfo");

    let newRaceInfoId = "raceInfo";
    switch (raceThumbnailId) {
        case `raceThumbHuman`:
            newRaceInfoId += 'Human';
            break;
        case `raceThumbElf`:
            newRaceInfoId += 'Elf';
            break;
        case `raceThumbDrow`:
            newRaceInfoId += 'Drow';
            break;
        case `raceThumbHalfElf`:
            newRaceInfoId += 'HalfElf';
            break;
        case `raceThumbHalfOrc`:
            newRaceInfoId += 'HalfOrc';
            break;
        case `raceThumbHalfling`:
            newRaceInfoId += 'Halfling';
            break;
        case `raceThumbDwarf`:
            newRaceInfoId += 'Dwarf';
            break;
        case `raceThumbGnome`:
            newRaceInfoId += 'Gnome';
            break;
        case `raceThumbTiefling`:
            newRaceInfoId += 'Tiefling';
            break;
        case `raceThumbGithyanki`:
            newRaceInfoId += 'Githyanki';
            break;
        case `raceThumbDragonborn`:
            newRaceInfoId += 'Dragonborn';
            break;
        default:
            console.error("Something wrong happened when trying to detect the race ID in changeRaceInfo()");
            break;
    }

    const newRaceInfo = document.getElementById(newRaceInfoId);
    if (newRaceInfo) {
        currentActiveRaceInfo[0].classList.remove("activeRaceInfo");
        newRaceInfo.classList.add("activeRaceInfo");
    }
}