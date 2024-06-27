import { IContentContainer } from "./IContentContainer";
import IDanceFloorCharacter from "./IDanceFloorCharacter";

export default interface IAddCustomPanel {
    setVisibility: (value: boolean) => void;
    addCustomImages: (value: IContentContainer[] | []) => void;
    customImages: IContentContainer[] | [];
    danceFloorData: IDanceFloorCharacter[] | null;
}
