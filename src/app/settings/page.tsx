"use client";
import styles from "@/styles/settings/settings.module.scss";
import badgeStyle from "@/styles/mainBadge/main-badge.module.scss";
import NickName from "@/components/MainBadge/header/NickName";
import Image from "next/image";
import submit_btn from "@/styles/buttons/submit-button.module.scss";
import Background from "@/components/Background/Background";
import useBackgroundVisibility from "@/hooks/useBackgroundVisibility";
import Parameter from "@/components/Settings/Parameter";
import ToggleButton from "@/components/Settings/ToggleButton";
import InputField from "@/components/Settings/InputField";
import Alert from "@/components/Alerts/Alert";
import { useRef, useState } from "react";
import Caching from "@/services/ChachingService";
import useData from "@/hooks/useData";
import LinkButton from "@/components/Buttons/LinkButton";
import useWeatherData from "@/hooks/useWeatherData";
import Cursor from "@/components/Cursor/Cursor";

const Settings = () => {
    const { isVisible, changeVisibility } = useBackgroundVisibility();
    const [alertVisibility, setAlertVisibility] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertColor, setAlertColor] = useState("");
    const data = useData();
    const weatherData = useWeatherData();

    const nickname = useRef<HTMLInputElement>(null);
    const bottomText = useRef<HTMLInputElement>(null);

    const applyChanges = () => {
        if (nickname.current?.value && bottomText.current?.value) {
            Caching.cacheData(
                "anime-badge-data",
                JSON.stringify({
                    nickname: nickname.current?.value,
                    bottomText: bottomText.current?.value,
                })
            );
            setAlertColor("green");
            setAlertMessage("Settings successfully applied!");
            setAlertVisibility(true);
        } else {
            setAlertColor("red");
            setAlertMessage("Error! Failed to apply settings!");
            setAlertVisibility(true);
        }
    };

    return (
        <>
            <Cursor />
            {isVisible && <Background />}
            {alertVisibility && (
                <Alert
                    message={alertMessage}
                    color={alertColor}
                    isVisible={alertVisibility}
                    setVisibility={setAlertVisibility}
                />
            )}
            <LinkButton
                href="/"
                text="Back to main"
                image_src="/images/home.png"
                classNames="left_btn"
            />

            <div className={badgeStyle.container_35}>
                <Image
                    src="/images/katana.png"
                    width={200}
                    height={200}
                    alt="Katana"
                    className={badgeStyle.katana_img_top}
                />
                <header className={styles.header}>
                    <NickName name="Settings" />
                </header>
                <main className={styles.main}>
                    <Parameter
                        name="Character"
                        children={<p>Monkey D. Luffy</p>}
                    />
                    <Parameter
                        name="Nickname"
                        children={
                            <InputField
                                value={data?.nickname || "Name"}
                                inputRef={nickname}
                                placeholder="Enter Nickname"
                                maxLength={16}
                            />
                        }
                    />
                    <Parameter
                        name="Bottom text"
                        children={
                            <InputField
                                value={
                                    data?.bottomText || "ウクライナに栄光あれ"
                                }
                                inputRef={bottomText}
                                placeholder="Enter bottom text"
                                maxLength={20}
                            />
                        }
                    />
                    <Parameter name="Dance floor" children={<p>Choose</p>} />
                    <Parameter
                        name="Background"
                        children={
                            <ToggleButton
                                isChecked={isVisible}
                                changeStatus={changeVisibility}
                            />
                        }
                    />
                    <Parameter
                        name="Cursor Effect"
                        children={
                            <ToggleButton
                                isChecked={isVisible}
                                changeStatus={changeVisibility}
                            />
                        }
                    />
                    <Parameter
                        name="Location"
                        children={
                            <p>{weatherData?.location.name || "Choose"}</p>
                        }
                    />
                </main>
                <footer className={styles.footer}>
                    <button
                        className={submit_btn.submit_btn}
                        onClick={applyChanges}
                    >
                        Apply changes
                    </button>
                </footer>
            </div>
        </>
    );
};

export default Settings;
