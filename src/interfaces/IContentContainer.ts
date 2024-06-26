import { ICharacter } from "./ICharacter";

export interface IContentContainer {
  src: string;
  name: string;
  data?: ICharacter;
}

export interface IContentContainerFull extends IContentContainer {
  selectedName: string | null;
  onChange: (name: IContentContainer) => void;
}
