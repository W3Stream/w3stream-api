import { Router } from "express";
import { ProviderProfileComponent } from "../components";


const router: Router = Router();

router.post('/', ProviderProfileComponent.create);

export default router;