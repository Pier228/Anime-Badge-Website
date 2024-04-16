"use client";
import styles from "@/styles/danceFloor/dance-floor-settings.module.scss";
import NickName from "../MainBadge/header/NickName";
import ContentContainer from "./ContentContainer";
import rounded_btn from "@/styles/buttons/rounded-button.module.scss";
import submit_btn from "@/styles/buttons/submit-button.module.scss";
import { useEffect, useState } from "react";
import IDanceFloorSettings from "@/interfaces/IDanceFloorSettings";
import { IContentContainer } from "@/interfaces/IContentContainer";
import IDanceFloorCharacter from "@/interfaces/IDanceFloorCharacter";
import Loader from "../Loader/Loader";

const DanceFloorSettings = ({
    state,
    setState,
    setSelectedDanceFloor,
    selectedImageName,
}: IDanceFloorSettings) => {
    const [selectedName, setSelectedName] = useState<IContentContainer | null>(
        null
    );
    const [danceFloorData, setDanceFloorData] = useState<
        null | IDanceFloorCharacter[]
    >(null);

    useEffect(() => {
        fetch(`/api/getDanceFloorData`)
            .then((res) => res.json())
            .then((json) => setDanceFloorData(json))
            .catch((error) => console.error(error));
    }, []);

    useEffect(() => setSelectedName(selectedImageName), [selectedImageName]);

    const handleChange = (obj: IContentContainer) => {
        setSelectedName(obj);
    };

    const setDanceFloor = () => {
        if (selectedName) {
            setSelectedDanceFloor(selectedName);
        }
        setState(false);
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
                    {danceFloorData ? (
                        <div className={styles.images_container}>
                            {danceFloorData.map(
                                (
                                    character: IDanceFloorCharacter,
                                    index: number
                                ) => (
                                    <ContentContainer
                                        src={character.src}
                                        name={character.name}
                                        onChange={handleChange}
                                        selectedName={
                                            selectedName?.name || null
                                        }
                                        key={index}
                                    />
                                )
                            )}
                        </div>
                    ) : (
                        <Loader />
                    )}

                    <button
                        className={
                            submit_btn.submit_btn +
                            ` ${styles.submit_btn_position}`
                        }
                        onClick={setDanceFloor}
                    >
                        Choose image
                    </button>
                </div>
            </>
        )
    );
};

export default DanceFloorSettings;
