import express from "express";
import {
  startedApplication,
  trailsApp,
} from "../controllers/started-application-controller";

const router = express.Router();

router.get("/started-app", startedApplication);
router.get("/hello-world", trailsApp);

export default router;
