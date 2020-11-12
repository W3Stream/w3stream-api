import { NextFunction, Request, Response } from 'express';
import HttpError from "../../config/error";
import { IProviderProfile } from './model';
import ProviderProfileService from './service'



export async function create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        let providerProfile: IProviderProfile = {
            age: req.body.age,
            avatar: req.body.avatar,
            bio: req.body.bio,
            email: req.body.email,
            isTokenEnabled: false,
            isVerified: false,
            socialUsername: req.body.socialUsername,
            username: req.body.username,
            provider: {
                name: req.body.providerName
            }
        }
        let created = await ProviderProfileService.create(providerProfile);
        res.status(200).json({ success: true });
        console.log("created", created);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}