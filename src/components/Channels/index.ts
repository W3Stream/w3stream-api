import { NextFunction, Request, Response } from 'express';
import HttpError from "../../config/error";
import { IChannels } from "./models";
import ChannelService from './service';

export async function create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        let channelCreationMetadata: IChannels = {
            channel_description: req.body.channel_description,
            channel_name: req.body.channel_name,
            subscribers: req.body.subscribers
        }
        let created = await ChannelService.createChannel(channelCreationMetadata);
        res.status(200).json({ success: true });
        console.log("created", created);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}