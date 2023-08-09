import { Router } from "express";

import {
	getGasTenders,
	getGasTender,
	createGasTender,
	updateGasTender,
	deleteGasTender,
	getLatestGasTenders,
} from "../controllers/gas.tender.controller.js";

const gasTenderRouter = Router();

gasTenderRouter.get("/", getGasTenders);
// gasTenderRouter.get("/:id", getGasTender);
gasTenderRouter.post("/", createGasTender);
gasTenderRouter.put("/:id", updateGasTender);
gasTenderRouter.delete("/:id", deleteGasTender);
gasTenderRouter.get("/latest", getLatestGasTenders);

export default gasTenderRouter;
