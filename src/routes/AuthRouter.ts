import { Router } from "express";
import { AuthComponent } from "../components";

const router: Router = Router();

router.get('/google/callback', AuthComponent.FindAll);

export default router;