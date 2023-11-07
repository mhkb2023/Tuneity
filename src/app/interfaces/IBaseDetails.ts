import { IBase } from "./IBase";

export interface IBaseDetails extends IBase {
    description: string;
    image: string;
    createdDateTime: string;
}