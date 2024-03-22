import { Response, Router } from "express"
import TestRoutes from "api/routes/test";

const router = Router();

router.get("/", (_, res: Response) => {
    res.send("API OK!");
});

router.get("/testget", TestRoutes.testGet);
router.post("/testpost", TestRoutes.testPost);

export default router;