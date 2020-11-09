import { IAuthService } from "./interface";

const AuthService: IAuthService = {
    async findAll(): Promise<any> {
        try {
            return { success: true }
        } catch (error) {
            throw new Error(error.message);
        }
    }
}