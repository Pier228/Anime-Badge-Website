export default interface IDanceFloorSettings {
    state: boolean;
    setState: (value: boolean) => void;
    setSelectedDanceFloor: (value: string) => void;
}