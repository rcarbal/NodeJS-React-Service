extractPopularServices = (array , word) => {
    for(var i = 0; i < array.length ; i++){
        if(array[i] === word){
            return true;
        }
    }

    return false;
}

module.exports ={
    extractPopularServices
}