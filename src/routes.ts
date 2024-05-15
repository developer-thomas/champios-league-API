import { Router } from "express";
import { getAllPlayers, getPlayerById, postPlayer, deletePlayer, updatePlayer } from "./controllers/players-controller";
import { getAllClubs } from "./controllers/clubs-controller";

export const router = Router();

// Cria-se a rota e aponta para qual controller essa rota se aplicará
router.get("/players", getAllPlayers);
router.get("/players/:id", getPlayerById);
router.post("/players", postPlayer);
router.delete("/players/:id", deletePlayer);
router.patch("/players/:id", updatePlayer);

router.get("/clubs", getAllClubs);
