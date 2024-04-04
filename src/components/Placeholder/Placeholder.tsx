import IPlaceholder from "@/interfaces/IPlaceholder";

const Placeholder = ({ width, height }: IPlaceholder) => {
    return <div style={{ width: width, height: height }} />;
};

export default Placeholder;
