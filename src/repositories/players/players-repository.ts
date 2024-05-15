import { PlayerModel, StatisticsModel } from "../../models/player-model";
import { allPlayers } from "./all-players";

const database: PlayerModel[] = allPlayers;

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return database;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
  const player = database.find((player) => player.id === id);
  return player;
};

export const createNewPlayer = async (newPlayer: PlayerModel) => {
  database.push(newPlayer);
};

export const deletePlayerById = async (id: number) => {
  const playerIndex = database.findIndex((player) => player.id === id);
  if (playerIndex !== -1) {
    database.splice(playerIndex, 1);
    return true;
  }
  return false;
};

export const findAndModifyPlayer = async (
  id: number,
  statistics: StatisticsModel
): Promise<PlayerModel | undefined> => {
  const playerIndex = database.findIndex((player) => player.id === id);

  if (playerIndex !== -1) {
    database[playerIndex].statistics = statistics;
  }

  return database[playerIndex];
};
