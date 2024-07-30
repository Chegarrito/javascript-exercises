const removeFromArray = function(...param) {
    // GET array
    const myArray = param[0];
    // GET numbers to remove
    const numOfParameters = param.length;
    const remove = [];
    for(let i = 1; i < numOfParameters; i++){
        remove[i - 1] = param[i];
    }
    let index;
    // FOR the elements in remove
    for(let i = 0; i < remove.length; i++){
        // WHILE numbers still are in the array
        while(myArray.includes(remove[i]) === true){
            // DETERMINE index
            index = myArray.indexOf(remove[i]); 
            // REMOVE index
            myArray.splice(index, 1);
        }
    }
    
    return myArray;
    // npm test removeFromArray.spec.js
};

// Do not edit below this line
module.exports = removeFromArray;
