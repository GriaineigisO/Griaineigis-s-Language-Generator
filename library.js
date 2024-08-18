//chooses a random index from an array
function randomIndexOfArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

export {randomIndexOfArray};