import { Request, Response } from "express";
import {
  createPlayerService,
  deletePlayerService,
  getPlayerByIdService,
  getPlayerService,
  updatePlayerService,
} from "../services/players-service";

import { badRequest } from "../utils/status-http";
import { StatisticsModel } from "../models/player-model";

export const getAllPlayers = async (req: Request, res: Response) => {
  const httpResponse = await getPlayerService();
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const httpResponse = await getPlayerByIdService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postPlayer = async (req: Request, res: Response) => {
  const bodyValues = req.body;
  const httpResponse = await createPlayerService(bodyValues);

  if (bodyValues) {
    res.status(httpResponse.statusCode).json(httpResponse.body);
  } else {
    const response = await badRequest();
    res.status(response.statusCode).json(response.body);
  }
};

export const deletePlayer = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const httpResponse = await deletePlayerService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const updatePlayer = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const bodyValues: StatisticsModel = req.body;
  const httpResponse = updatePlayerService(id, bodyValues);
  res.status((await httpResponse).statusCode).json((await httpResponse).body);
};
