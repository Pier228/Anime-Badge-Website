import { IContentContainer } from "./IContentContainer";

export default interface IDeleteCustomImage {
  customImages: IContentContainer[];
  srcToRemove: string;
  setNewData: (value: IContentContainer[]) => void;
  setSelectedObject: (value: IContentContainer) => void;
  setSelectedName: (value: IContentContainer) => void;
}
