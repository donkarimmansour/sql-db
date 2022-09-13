import { Schema, models, model } from 'mongoose';

const userSchema = new Schema({
    FBID: Number,
    First_NAME: String,
    Last_NAME: String,
    GENDER: String,
    LOCATION: String,
    HomeTown: String,
    BIRTHDAY: String,
    EMAIL: String,
    MOBILE: Number,
})

const Users = models.user || model('user', userSchema);

export default Users;

