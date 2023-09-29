import { IArtist, ITrack, IResponse, IAlbum } from "./typings";
import { api } from "../../api/config";

export const $_getArtistAlbums = (id: string) => {
  return api.get(`artist/${id}/albums`).json<IResponse & { data: IAlbum[] }>();
};

export const $_getArtistTopTracks = (id: string) => {
  return api.get(`artist/${id}/top`).json<IResponse & { data: ITrack[] }>();
};

export const $_getArtistData = (id: string) => {
  return api.get(`artist/${id}`).json<IArtist>();
};
