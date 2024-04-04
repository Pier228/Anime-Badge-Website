export default interface IContentContainer {
    src: string;
    name: string;
    selectedName: string | null;
    onChange: (id: string) => void;
}
