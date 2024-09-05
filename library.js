//chooses a random index from an array
function randomIndexOfArray(array) {
    return array[Math.floor(Math.random() * array.length)];
};

function cloneArray(array) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray.push(array[i]);
    }
    return newArray;
};

export {randomIndexOfArray, cloneArray};