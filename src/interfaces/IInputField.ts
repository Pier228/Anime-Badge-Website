export default interface IInputField {
    value: string;
    inputRef: React.LegacyRef<HTMLInputElement>;
    placeholder: string;
    maxLength: number;
}
