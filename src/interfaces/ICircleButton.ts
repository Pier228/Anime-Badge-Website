import { ReactNode } from "react";

export default interface ICircleButton {
    children: ReactNode;
    onClick: () => void;
}
