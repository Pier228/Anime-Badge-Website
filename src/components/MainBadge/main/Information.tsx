import IProfile from "@/interfaces/IProfile";
import styles from "@/styles/mainBadge/main-badge-content.module.scss";

const Information = (props: IProfile) => {
    return (
        <div className={styles.info_container}>
            <p>
                Name: <span>{props.name}</span>
            </p>
            <p>
                Age: <span>{props.age}</span>
            </p>
            <p>
                Description: <span>{props.description}</span>
            </p>
        </div>
    );
};

export default Information;
