import { ICharacterFull } from "./ICharacter";
import { IContentContainer } from "./IContentContainer";

export default interface IData {
  nickname?: string;
  bottomText?: string;
  character?: ICharacterFull;
  danceFloor?: IContentContainer;
  location?: string;
  background?: string;
  cursorEffect?: string;
}
