import { number, string } from "joi";
import { Schema, Document } from "mongoose";
import * as connections from '../../config/connection/connection';

export interface IChannels {
    channel_name: string;
    channel_description: string;
    subscribers: number;
    ownners?: any;
}


export interface IChannelModel extends Document {
    channel_name: string;
    channel_description: string;
    subscribers: number;
    owners?: any;
}

const ChannelSchema: Schema = new Schema({
    channel_name: String,
    channel_description: String,
    subscribers: Number,
    dateOfEntry: {
        type: Date,
        default: new Date()
    },
    lastUpdated: {
        type: Date,
        default: new Date()
    },
    owners:
    {
        type: Schema.Types.ObjectId,
        ref: 'UserProfile'
    }
},
    {
        collection: 'channels',
        versionKey: false
    });

export default connections.db.model<IChannelModel>('ChannelModel', ChannelSchema);
