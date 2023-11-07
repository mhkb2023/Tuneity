import { IBaseDetails } from "./IBaseDetails";
import { IArtist } from "./IArtist";
import { Genre } from "../enums/Genre";

export interface ITrack extends IBaseDetails {
    artist: IArtist;
    playCount: number;
    lyrics: string;
    duration: string;
    file: File;
    number: number;
    genre: Genre;
    
}