import { NextFunction, Request, Response } from 'express';
import HttpError from "../../config/error";

export async function FindAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        console.log(req);
        res.status(200).json({ success: true });
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}


