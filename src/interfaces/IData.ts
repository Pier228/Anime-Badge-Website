import { IContentContainer } from "./IContentContainer";

export default interface IData {
    nickname?: string;
    bottomText?: string;
    character?: string;
    danceFloor?: IContentContainer;
    location?: string;
    background?: string;
    cursorEffect?: string;
}
