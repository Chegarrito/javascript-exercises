const removeFromArray = function(...param) {
    // param[0] equals to the array
    let array = param[0];
    let numberOfParameters = param.length;
    // array for the parameters
    let values = [];
    // assign the values of the parameters to an array
    // this is correct
    for (let i = 1; i < numberOfParameters; i++){
        values[i - 1] = param[i]; 
    }
    // Loop thru the values
    for(let i = 0; i < values.length; i++){
        // Loop thru the array
        for (let j = 0; j < array.length; j++){
            if(values[i] === array[j]){
                array.splice(j, 1);
            }
        }
    }
// npm test removeFromArray.spec.js
    return array;



};

// Do not edit below this line
module.exports = removeFromArray;

