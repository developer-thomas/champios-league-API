import * as clubsRepository from "../repositories/clubs/clubs-repository";
import * as HttpResponse from "../utils/status-http";

export const getClubsService = async () => {
  const data = await clubsRepository.findAllClubs();
  const dataResponse = HttpResponse.statusOk(data);
  return dataResponse;
};
