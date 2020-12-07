let data = [3, 6, 12, -5, 7, 3];

const adjacentElementsProduct = (inputArray) =>{
    let largest = 0;
    for(let i = 0 ; i < inputArray.length; i++){
        let currentProduct = (inputArray[i]) * (inputArray[i+1]);
        if(currentProduct > largest){
            largest = currentProduct;
        }
    }

    return largest;
}

adjacentElementsProduct([3, 6, 12, -5, 7, 3]);

const recursiveProduct = (input , currentValue , currentPosition) => {
    if((currentPosition + 1) >= input.length) return currentValue
    let value = (input[currentPosition] * input[currentPosition + 1])
    return recursiveProduct(input, (currentValue > value) ? currentValue : value , currentPosition + 1)
}

console.log("Result : " , recursiveProduct(data , 0 , 0))
