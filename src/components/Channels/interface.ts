import { IChannels } from "./models";

export interface IChannelService {
    createChannel(channelMetada: IChannels): Promise<boolean>;
}