import { IContentContainer } from "./IContentContainer";

export default interface IAddCustomPanel {
    setVisibility: (value: boolean) => void;
    addCustomImages: (value: IContentContainer[] | []) => void;
    customImages: IContentContainer[] | [];
}
