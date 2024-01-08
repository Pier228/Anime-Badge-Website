import IProfile from "@/interfaces/IProfile";
import styles from "@/styles/badge/main-badge-content.module.scss";

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
                Birthday: <span>{props.birthday}</span>
            </p>
            <p>
                Occupations: <span>{props.occupation}</span>
            </p>
        </div>
    );
};

export default Information;
