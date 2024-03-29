import IAlert from "@/interfaces/IAlert";
import styles from "@/styles/alerts/alerts.module.scss";
import { useState } from "react";

const Alert = (props: IAlert) => {
    const [isVisible, setVisibility] = useState(props.isVisible);

    return (
        isVisible && (
            <div
                className={styles.alert}
                style={{ backgroundColor: props.color }}
            >
                <span
                    className={styles.closebtn}
                    onClick={() => props.setVisibility(false)}
                >
                    &times;
                </span>
                {props.message}
            </div>
        )
    );
};

export default Alert;
