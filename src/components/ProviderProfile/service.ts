import { IProviderProfileService } from "./interface";
import ProviderProfileModel, { IProviderProfile } from "./model";


const ProviderProfileService: IProviderProfileService = {

    async create(body: IProviderProfile): Promise<boolean> {
        try {
            await ProviderProfileModel.create(body);
            return true;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}

export default ProviderProfileService; 