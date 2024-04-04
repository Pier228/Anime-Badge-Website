import IContentContainer from "@/interfaces/IContentContainer";
import styles from "@/styles/danceFloor/content-container.module.scss";
import Image from "next/image";

const ContentContainer = (props: IContentContainer) => {
    const handleChange = () => {
        props.onChange(props.name);
    };

    return (
        <label
            className={
                styles.container +
                ` ${
                    props.selectedName === props.name &&
                    styles.selected_container
                }`
            }
        >
            <input
                type="radio"
                name={props.name}
                onChange={handleChange}
                checked={props.selectedName === props.name}
            />
            <Image
                src={props.src}
                fill
                alt={props.name}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </label>
    );
};

export default ContentContainer;
