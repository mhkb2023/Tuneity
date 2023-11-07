import { ISettings } from "./ISettings";

export interface IUser {
    id: string;
    name: string;
    image: string;
    settings: ISettings;
    playlists: string[];
    liked: string[];

    addPlaylist(playlistId: string): void;
    removePlaylistById(playlistId: string): void;
    addLikedTrack(trackId: string): void;
    removeLikedTrackById(trackId: string): void;

}