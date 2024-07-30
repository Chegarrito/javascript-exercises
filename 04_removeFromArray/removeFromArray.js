const removeFromArray = function(...param) {
    // the first parameter of the function is the array
    const myArray = param[0];
    // Check how many values do we have to remove
    const numOfParameters = param.length;
    // declaration of remove arguments and their index in the array
    const remove = [];
    const index = [];
    // declaring the values that we need to remove into the remove array
    for (let i = 1; i < numOfParameters; i++){
        // the minus is because the loop is set from 1, and we want to set the values of the array
        remove[i - 1] = param[i];
        index[i - 1] = myArray.indexOf(remove[i-1]);
    }
    
    for(let i = 0; i < index.length; i++){
        myArray.splice(index[i], 1);
    }
    
    return myArray;
    // npm test removeFromArray.spec.js
};

// Do not edit below this line
module.exports = removeFromArray;

