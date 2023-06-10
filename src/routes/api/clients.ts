import { Router, Request, Response } from "express";
import {
  createClient,
  deleteClients,
  getAllClients,
  getClient,
  updateClient,
} from "../../controller/api/clients";

const router = Router();

// GET
router.get("/client/:id", getClient).get("/clients", getAllClients);

// POST
router.post("/createClient", createClient);
// PATCH
router.patch("/updateClient/:id", updateClient);
// DELETE
router.delete("/deleteClient/:id", deleteClients);

export default router;
