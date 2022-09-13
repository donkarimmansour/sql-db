import mongoose from "mongoose";

const connectMongo = async () => {

    try {
        const { connection } = await mongoose.connect("mongodb://localhost:27017/users" , { useNewUrlParser: true});

        if (connection.readyState == 1) {
            console.log('DataBase Connected... ✅');
        }

    } catch (error) {
        return Promise.reject(error);
    }
}

export default connectMongo;