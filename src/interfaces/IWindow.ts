import { ReactNode } from "react";
import IDanceFloorCharacter from "./IDanceFloorCharacter";
import {ICharacter} from "./ICharacter";

export default interface IWindow {
  setState: (value: boolean) => void;
  data: IDanceFloorCharacter[] | ICharacter[] | null;
  buttonText: string;
  header?: ReactNode;
  children: ReactNode;
  nickName: string;
  setSelectedData: () => void;
}
