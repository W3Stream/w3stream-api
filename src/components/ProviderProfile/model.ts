import { Schema, Document } from "mongoose";
import * as connections from '../../config/connection/connection';
import { IChannelModel } from "../Channels/models";


export interface IProviderProfile {
    email: string
    username: string,
    age: number,
    avatar: string,
    bio: string,
    isTokenEnabled: boolean,
    isVerified: boolean,
    socialUsername: string,
    provider: IProvider
}

export interface IProvider {
    name: string;
}

export interface IProviderModel extends Document {
    name: string;
}

export interface ISubscribedModel extends Document {
    channelId: Schema.Types.ObjectId;
}

const ProviderSchema: Schema = new Schema({
    name: String
});

const SubscribedSchema: Schema = new Schema({
    channelId: Schema.Types.ObjectId
});

export interface IProviderProfileModel extends Document {
    email: string
    username: string,
    age: number,
    avatar: string,
    bio: string,
    isTokenEnabled: boolean,
    isVerified: boolean,
    socialUsername: string,
    channel?: IChannelModel['_id'],
    subscriptions?: ISubscribedModel['_id']

}
const ProviderProfileSchema: Schema = new Schema({
    email: String,
    username: String,
    age: Number,
    avatar: String,
    bio: String,
    isTokenEnabled: Boolean,
    isVerified: Boolean,
    socialUsername: String,
    provider: ProviderSchema,
    subscriptions: [{
        type: Schema.Types.ObjectId,
        ref: 'channels'
    }],
    channel: {
        type: Schema.Types.ObjectId,
        ref: 'channels'
    },
    dateOfEntry: {
        type: Date,
        default: new Date()
    },
    lastUpdated: {
        type: Date,
        default: new Date()
    }
},
    {
        collection: 'providerProfile',
        versionKey: false
    });

export default connections.db.model<IProviderProfileModel>('ProviderProfileModel', ProviderProfileSchema);