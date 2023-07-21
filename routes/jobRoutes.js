import express from "express";
const router = express.Router();

import {
  createJob,
  deleteJob,
  updateJob,
  showStats,
  getAllJobs,
} from "../controllers/jobControllers.js";

router.route("/").post(createJob).get(getAllJobs);
//remember about :id
router.route("/stats").get(showStats);
router.route("/:id").delete(deleteJob).patch(updateJob);

export default router;
