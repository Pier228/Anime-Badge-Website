"use client";
import styles from "@/styles/danceFloor/dance-floor-settings.module.scss";
import NickName from "../MainBadge/header/NickName";
import ContentContainer from "./ContentContainer";
import rounded_btn from "@/styles/buttons/rounded-button.module.scss";
import submit_btn from "@/styles/buttons/submit-button.module.scss";
import { useState } from "react";

const DanceFloorSettings = ({
    state,
    setState,
}: {
    state: boolean;
    setState: (value: boolean) => void;
}) => {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const handleChange = (id: string) => {
        setSelectedId(id);
    };

    return (
        state && (
            <>
                <div className={styles.background} />
                <div className={styles.container}>
                    <div className={styles.title}>
                        <NickName name="Dance Floor" />
                    </div>
                    <button
                        className={rounded_btn.right_btn}
                        onClick={() => setState(false)}
                    >
                        Close
                    </button>
                    <div className={styles.images_container}>
                        {Array.from({ length: 30 }).map((_, index) => (
                            <ContentContainer
                                src="https://media3.giphy.com/media/4ilFRqgbzbx4c/200.gif"
                                name={index.toString()}
                                onChange={handleChange}
                                selectedName={selectedId}
                                key={index}
                            />
                        ))}
                    </div>
                    <button
                        className={
                            submit_btn.submit_btn +
                            ` ${styles.submit_btn_position}`
                        }
                        onClick={() => setState(false)}
                    >
                        Choose image
                    </button>
                </div>
            </>
        )
    );
};

export default DanceFloorSettings;
