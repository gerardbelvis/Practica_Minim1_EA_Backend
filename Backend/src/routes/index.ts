import { Router } from "express";
import broteController from "../controllers/broteController";

const router: Router = Router();

router.get("/", broteController.getBrotes);
router.get("/:broteid", broteController.getBrote);

router.post("/new", broteController.addBrote);

router.put("/:broteid", broteController.editBrote);

export default router;

