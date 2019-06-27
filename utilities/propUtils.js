extractPopularServices = (array , word) => {
    for(var i = 0; i < array.length ; i++){
        if(array[i]["value"] === word){ // {value:}
            return {
                price: array[i]["price"]
            };
        }
    }

    return {};
}

module.exports ={
    extractPopularServices
}