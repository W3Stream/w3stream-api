import { Router } from "express";
import { ChannelComponent } from "../components";

const router: Router = Router();

router.post('/', ChannelComponent.create);

export default router;