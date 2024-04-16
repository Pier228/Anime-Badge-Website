import styles from "@/styles/badge/add-custom-badge.module.scss";
import submit_btn from "@/styles/buttons/submit-button.module.scss";
import backgroundStyles from "@/styles/danceFloor/dance-floor-settings.module.scss";
import InputField from "../Settings/InputField";
import { useRef } from "react";
import NickName from "../MainBadge/header/NickName";
import Parameter from "../Settings/Parameter";
import IAddCustomPanel from "@/interfaces/IAddCustomPanel";

const AddCustomPanel = (props: IAddCustomPanel) => {
    const name = useRef<HTMLInputElement>(null);
    const source = useRef<HTMLInputElement>(null);

    return (
        <>
            <div
                className={backgroundStyles.background}
                onClick={() => props.setVisibility(false)}
            />
            <div className={styles.badge}>
                <NickName name="Add custom image" />
                <div className={styles.main}>
                    <Parameter
                        name="Enter name"
                        children={
                            <InputField
                                value=""
                                placeholder="Name"
                                inputRef={name}
                                maxLength={16}
                            />
                        }
                    />
                    <Parameter
                        name="Enter source"
                        children={
                            <InputField
                                value=""
                                placeholder="Source"
                                inputRef={source}
                                maxLength={100}
                            />
                        }
                    />
                </div>
                <button
                    className={
                        submit_btn.submit_btn + ` ${styles.submit_btn_position}`
                    }
                    onClick={() => console.warn("This function in development")}
                >
                    Add image
                </button>
            </div>
        </>
    );
};

export default AddCustomPanel;
