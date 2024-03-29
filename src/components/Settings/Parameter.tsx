import type IParams from "@/interfaces/IParams";
import styles from "@/styles/settings/parameters.module.scss";

const Parameter = (params: IParams) => {
    return (
        <div className={styles.container}>
            <p>{params.name}:</p>
            {params.children}
        </div>
    );
};

export default Parameter;
