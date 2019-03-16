import {
    locations, vocabulary, encounters, defaultTexts, defaultImages
} from './gamedata.js';
import CurrentLocation from '../classes/location.js';
import ItemPlaces from '../classes/itemplaces.js';

// Возвращает текст, который выводится как описание локации
const constructLocation = () => {

    // Берём из объекта с локациями описание текущей локации
    let location = CurrentLocation.get();
    let description = locations[location].desc; 

    // Добавляем пояснение для особых игровых ситуаций
    description += encounters.addDescription();

    // Если в локации лежат предметы, то добавляем их список к описанию локации
    const allItemPlaces = ItemPlaces.getAll();
    let itemsArray = [];

    for (let key in allItemPlaces) {
        if (allItemPlaces[key] === location) {
            itemsArray.push(key);
        };
    }

    const itemsInLoc = itemsArray.map((item) => {
        return `<span class="inventory-item">${vocabulary.objects[item].name}</span>`
    }).join(', ').concat('.');

    if (itemsArray.length) {
        description += `<div class="new-paragraph">${defaultTexts.itemsInLocation} ${itemsInLoc}</div>`;
    }

    return description;
}

const renderScreen = (mainText, image, actionText, isInputAreaVisible) => {
    document.getElementById("screen").innerHTML = mainText;
    document.getElementById("image").innerHTML = image;
    document.getElementById("action").innerHTML = actionText;
    document.getElementById("input-area").style.opacity = isInputAreaVisible ? '100' : '0';
}

// Формирует экран, который выдаётся пользователю после совершённого им действия
const renderGameScreen = (actionText) => {
    const imageTag = `<img src="img/${locations[CurrentLocation.get()].img}">`;
    renderScreen(constructLocation(), imageTag, actionText, true)
};

// Формирует статический экран, например, стартовый экран, экран победы в игре, экран game over и т.д.
const renderNonGameScreen = (type) => {
    let text, image, action;
    switch(type) {
        case "start":
            text = defaultTexts.startMainText;
            action = defaultTexts.pressEnterToStart;
            image = defaultImages.startImage;
            break;
        case "gameover":
            text = encounters.getGameOverText();
            action = defaultTexts.pressEnterToStartAgain;
            image = defaultImages.gameOverImage;
            break;
        case "victory":
            text = defaultTexts.victoryText;
            action = defaultTexts.pressEnterToStartAgain;
            image = defaultImages.victoryImage;
            break;
    }
    renderScreen(text, image, action, false);
}

export {
    renderGameScreen,
    renderNonGameScreen
};