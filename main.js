//We need a randomizer Math.random()
//We need a random index from an array

// We want an array of domino list items and I will pick a random domino using a random index between 0 and length of array.

//Node list still works with Index. Array.from() if given a nodelist you will get an array as output. NodeList-> Array.from() -> Array
let dominoElement = document.querySelectorAll("#DominoList li") // Array.from(document.querySelectorAll("#DominoList li") will make into an array

function randomNumber (min,max) {
    return Math.floor(Math.random() * (max-min +1) + min)
}

let lastIndex = dominoElement.length - 1
let firstIndex = 0
let randomIndex = randomNumber(firstIndex,lastIndex)
let randomDomino = dominoElement[randomIndex]

console.log(randomDomino)

randomDomino.classList.add("selected")      