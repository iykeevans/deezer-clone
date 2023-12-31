export interface IArtist {
  id?: number | string;
  name: string;
  link?: string;
  share?: string;
  picture?: string;
  picture_small?: string;
  picture_medium?: string;
  picture_big?: string;
  picture_xl?: string;
  nb_album?: number;
  nb_fan?: number;
  radio?: boolean;
  tracklist?: string;
  type: string;
  role?: string;
}

export interface IAlbum {
  id: string | number;
  title: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  md5_image: string;
  tracklist: string;
  release_date?: string;
  type: string;
}

export interface ITrack {
  id: string | number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  link?: string;
  duration: string | number;
  rank: string;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  md5_image: string;
  artist: IArtist;
  album: IAlbum;
  type: string;
  contributors?: IArtist[];
}

export interface IResponse {
  next?: string;
  total?: number;
}
