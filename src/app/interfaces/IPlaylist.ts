import { IBaseDetails } from "./IBaseDetails";
import { ITrack } from "./ITrack";

export interface IPlaylist extends IBaseDetails { 
    isPublic: boolean;
    count: number;
    duration: string;
    tracks: ITrack[];

    addTrack(track: ITrack): void;
    removeTrackById(): void;
}