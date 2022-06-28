//getting a random dice number
function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(function (num) {
        return (Math.round(Math.random() * 5) + 1);
    })
}



const hero = {
    elementId: "hero",
    name: "Wizard",
    avatar: "images/wizard.png",
    health: 60,
    diceCount: 3
}

const monster = {
    elementId: "monster",
    name: "Orc",
    avatar: "images/orc.png",
    health: 10,
    diceCount: 1
}





// get value

function getDiceHtml(diceCount) {
    return getDiceRollArray(diceCount).map(function (diceNum) {
        return `<div class="dice">${diceNum}</div>`
    }).join(' ');

};


//renders the chracter
function renderCharacter(data) {
    const { elementId, name, avatar, health, diceCount } = data;
    const diceHtml = getDiceHtml(diceCount);

    document.getElementById(elementId).innerHTML =
        `<div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src="${avatar}" />
        <div class="health">health: <b>${health}</b></div>
        <div class="dice-container">
            ${diceHtml}
        </div>
    </div>`;
}



renderCharacter(hero);
renderCharacter(monster);

