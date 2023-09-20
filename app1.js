//check a number float or intenger 

function isFloat(num) {
     return typeof num === 'number' && !Number.isInteger(num);
    }
    function isInteger(num) {
     return Number.isInteger(num);
    }

    // Example usage:
    const number = 10.5;
    if (isFloat(number)) {
    console.log('The number is a float.');
    } else if (isInteger(number)) {
     console.log('The number is an integer.');
    } 
    
    //output :  The number is a float