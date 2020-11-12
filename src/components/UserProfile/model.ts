import { Schema } from "mongoose";



const ProviderSchema: Schema = new Schema({
    name: String
});

const UserProfileSchema: Schema = new Schema({
    app_userid: String,
    provider: ProviderSchema,
})