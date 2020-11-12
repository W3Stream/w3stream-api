import { IChannelService } from "./interface";
import ChannelModel, { IChannelModel, IChannels } from "./models";



const ChannelService: IChannelService = {
    async createChannel(channelMetada: IChannels): Promise<boolean> {
        try {
            await ChannelModel.create(channelMetada);
            return true;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}

export default ChannelService;