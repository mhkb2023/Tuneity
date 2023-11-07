
import { IBaseDetails } from "./IBaseDetails";
import { IAlbum } from "./IAlbum";
import { ITrack } from "./ITrack";

export interface IArtist extends IBaseDetails {
    albums: IAlbum[];
    tracks: ITrack[];

    addAlbum(album: IAlbum): void;
    removeAlbumById(): void;
}