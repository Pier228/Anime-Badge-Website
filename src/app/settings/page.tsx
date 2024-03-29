"use client";
import styles from "@/styles/settings/settings.module.scss";
import Link from "next/link";
import badgeStyle from "@/styles/mainBadge/main-badge.module.scss";
import NickName from "@/components/MainBadge/header/NickName";
import Image from "next/image";
import rounded_btn from "@/styles/buttons/rounded-button.module.scss";
import submit_btn from "@/styles/buttons/submit-button.module.scss";
import Background from "@/components/Background/Background";
import useBackgroundVisibility from "@/hooks/useBackgroundVisibility";
import Parameter from "@/components/Settings/Parameter";
import ToggleButton from "@/components/Settings/ToggleButton";
import InputField from "@/components/Settings/InputField";
import Alert from "@/components/Alerts/Alert";
import { useState } from "react";

const Settings = () => {
    const { isVisible, changeVisibility } = useBackgroundVisibility();
    const [alertVisibility, setAlertVisibility] = useState(false);

    const applyChanges = () => setAlertVisibility(true);

    return (
        <>
            {isVisible && <Background />}
            {alertVisibility && (
                <Alert
                    message="Settings successfully applied!"
                    color="green"
                    isVisible={alertVisibility}
                    setVisibility={setAlertVisibility}
                />
            )}
            <Link href="/" className={rounded_btn.left_btn}>
                <Image
                    src="/images/home.png"
                    width={20}
                    height={20}
                    alt="settings"
                />
                Back to main
            </Link>
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
                        children={<InputField value="Name" />}
                    />
                    <Parameter
                        name="Bottom text"
                        children={<InputField value="ウクライナに栄光あれ" />}
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
                    <Parameter name="Location" children={<p>Choose</p>} />
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
