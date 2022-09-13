import mongoose from "mongoose";

const connectMongo = async () => {

    try {
        const DB_URL = "mongodb+srv://admin:admin@cluster0.z26mvso.mongodb.net/sql"

        const { connection } = await mongoose.connect(DB_URL , { useNewUrlParser: true});

        if (connection.readyState == 1) {
            console.log('DataBase Connected... ✅');
        }else{
             console.log('DataBase error... ✅');
        }

    } catch (error) { 
        return Promise.reject(error); 
    }
}

export default connectMongo;