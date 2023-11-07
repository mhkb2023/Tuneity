import { IBaseDetails } from "./IBaseDetails";
import { ITrack } from "./ITrack";

export interface IAlbum extends IBaseDetails {
    tracks: ITrack[]

    addTrack(track: ITrack): void;
    removeTrackById(): void;
}