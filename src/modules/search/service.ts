import { IArtist, ITrack, IResponse } from "./typings";
import { api } from "../../api/config";

export const $_searchByQuery = (query: string) => {
  return api.get(`search?q=${query}`).json<IResponse & { data: ITrack[] }>();
};

export const $_searchByArtist = (artist: string) => {
  return api
    .get(`search/artist?q=${artist}`)
    .json<IResponse & { data: IArtist[] }>();
};
