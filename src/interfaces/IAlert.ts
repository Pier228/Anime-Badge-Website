export default interface IAlert {
    message: string;
    color: string;
    isVisible: boolean;
    setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}
