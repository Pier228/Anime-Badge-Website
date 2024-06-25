import { ReactNode } from "react";
import IDanceFloorCharacter from "./IDanceFloorCharacter";

export default interface IWindow {
  setState: (value: boolean) => void;
  data: IDanceFloorCharacter[] | null;
  buttonText: string;
  header?: ReactNode;
  children: ReactNode;
  nickName: string;
  setSelectedData: () => void;
}