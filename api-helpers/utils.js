import mongoose from "mongoose"

export const connectToDb = async ()=>{
    if (mongoose.connections[0])
    {
        return;
    }
   await mongoose
    .connect("mongodb://admin:C1cOelpu2YUBSVGo@ac-uxdyluq-shard-00-00.whmkbbf.mongodb.net:27017,ac-uxdyluq-shard-00-01.whmkbbf.mongodb.net:27017,ac-uxdyluq-shard-00-02.whmkbbf.mongodb.net:27017/?ssl=true&replicaSet=atlas-oyb2cd-shard-0&authSource=admin&retryWrites=true&w=majority")
    .then(()=> console.log("Connected"))
    .catch((err)=> console.log(err));
  }
