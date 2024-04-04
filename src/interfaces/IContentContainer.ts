export interface IContentContainer {
    src: string;
    name: string;
}

export interface IContentContainerFull extends IContentContainer {
    selectedName: string | null;
    onChange: (name: string) => void;
}
