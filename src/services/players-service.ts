import { PlayerModel, StatisticsModel } from "../models/player-model";
import * as playerRepository from "../repositories/players/players-repository";
import * as HttpResponse from "../utils/status-http";

export const getPlayerService = async () => {
  const data = await playerRepository.findAllPlayers();
  let dataResponse = null;

  if (!data) {
    return await HttpResponse.noContent(data);
  } else {
    dataResponse = await HttpResponse.statusOk(data);
  }
  return dataResponse;
};

export const getPlayerByIdService = async (id: string) => {
  const idParam = parseInt(id);
  const data = await playerRepository.findPlayerById(idParam);

  if (!data) {
    return HttpResponse.noContent(data);
  } else {
    return HttpResponse.statusOk(data);
  }
};

export const createPlayerService = async (player: PlayerModel) => {
  let response = null;

  if (Object.keys(player).length !== 0) {
    await playerRepository.createNewPlayer(player);
    response = HttpResponse.created();
  } else {
    response = HttpResponse.badRequest();
  }

  return response;
};

export const deletePlayerService = async (idParam: number) => {
  let response = null;
  const isDeleted = await playerRepository.deletePlayerById(idParam);

  if (isDeleted) {
    response = HttpResponse.statusOk({ message: "deleted" });
  } else {
    response = HttpResponse.badRequest({ message: "Bad Request" });
  }
  return response;
};

export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {
  const data = await playerRepository.findAndModifyPlayer(id, statistics);
  let response = null;
  // O erro "no overload matches this call" relacionado ao Object.keys() geralmente ocorre quando o
  // argumento passado para Object.keys() não está sendo reconhecido corretamente como um objeto.
  // Isso pode acontecer se o argumento for null, undefined, uma string, um número ou outro tipo que não seja
  // um objeto.

  // Nessa versão, antes de verificar o comprimento das chaves de data, verificamos se data é null ou
  // undefined. Se for o caso, consideramos que não há dados e tratamos como uma solicitação (bad request).
  if (!data || Object.keys(data).length === 0) {
    response = await HttpResponse.badRequest();
  } else {
    response = await HttpResponse.statusOk(data);
  }
  return response;
};
