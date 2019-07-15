function successJSON(data){
 console.log(data);
 for (key in data){
     console.log(key);
 }
};

module.exports = {
    successJSON
}