const removeFromArray = function(array, remove) {
    let arrayLength = array.length;
    for (let i = 0; i < arrayLength; i++){
        if (array[i] === remove){
            array.splice(i, 1);
        }
    }
    return array;



};

// Do not edit below this line
module.exports = removeFromArray;

