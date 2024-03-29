import type IAlert from "@/interfaces/IAlert";
import styles from "@/styles/alerts/alerts.module.scss";
import { useEffect, useState } from "react";

const Alert = (props: IAlert) => {
    const [isVisible, setVisibility] = useState(props.isVisible);

    useEffect(() => {
        setTimeout(() => {
            props.setVisibility(false);
        }, 4000);
    }, [isVisible])
    

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
