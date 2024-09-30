//chooses a random index from an array
function randomIndexOfArray(array) {
    return array[Math.floor(Math.random() * array.length)];
};

//copies all the items form an array and pushes them all to a new array
function cloneArray(array) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray.push(array[i]);
    }
    return newArray;
};

//copies all the items, to a new array, but leaves out any duplicates
function removeDuplicates(array) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        if(newArray.includes(array[i]) === false) {
            newArray.push(array[i]);
        };
    };
    return newArray;
};

export {randomIndexOfArray, cloneArray, removeDuplicates};