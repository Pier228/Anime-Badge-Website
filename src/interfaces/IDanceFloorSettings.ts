import { IContentContainer } from "./IContentContainer";

export default interface IDanceFloorSettings {
    state: boolean;
    setState: (value: boolean) => void;
    setSelectedDanceFloor: (value: IContentContainer) => void;
    selectedImageName: IContentContainer | null;
}