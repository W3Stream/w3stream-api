import { IProviderProfile } from "./model";

export interface IProviderProfileService {
    create(body: IProviderProfile): Promise<boolean>;
}