/** 
 * Completely clears the React-Node Mongo collections.
*/

const  mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/reactnode", { useNewUrlParser: true }, () => {
    console.log("=============================================================================================================================");
    console.log("=============================================================================================================================");
    console.log("=============================================================================================================================");
    console.log("\nConnected to mongoDB");
    mongoose.connection.db.dropDatabase((error)=>{
        if(error){
            console.log(error);
            process.exit(1)
        }else{
            console.log("Deleted database.");
            process.exit(0)
        }
    });
    
    
});
