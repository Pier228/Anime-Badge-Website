import { ICharacter } from "./ICharacter";

export interface IContentContainer {
  src: string;
  name: string;
  data?: ICharacter;
}

export interface IContentContainerFull extends IContentContainer {
  selectedImg: IContentContainer | null;
  onChange: (name: IContentContainer) => void;
  deletable?: boolean;
  deleteHandler?: () => void;
}
