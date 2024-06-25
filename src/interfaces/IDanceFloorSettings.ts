import { IContentContainer } from "./IContentContainer";

export default interface IDanceFloorSettings {
    state: boolean;
    setState: (value: boolean) => void;
    setSelectedObject: (value: IContentContainer) => void;
    selectedObject: IContentContainer | null;
  }