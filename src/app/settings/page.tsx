"use client";
import styles from "@/styles/settings/settings.module.scss";
import btn_styles from "@/styles/buttons/buttons.module.scss";
import Link from "next/link";
import badgeStyle from "@/styles/mainBadge/main-badge.module.scss";
import NickName from "@/components/MainBadge/header/NickName";
import Image from "next/image";
import buttonStyle from "@/styles/buttons/buttons.module.scss";
import Background from "@/components/Background/Background";
import useBackgroundVisibility from "@/hooks/useBackgroundVisibility";

const Settings = () => {
    const { isVisible, changeVisibility } = useBackgroundVisibility();

    return (
        <>
            {isVisible && <Background />}
            <Link href="/" className={btn_styles.left_btn}>
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
                    <p>Character: </p>
                    <p>NickName:</p>
                    <p>Bottom text:</p>
                </main>
                <footer className={styles.footer}>
                    <button className={buttonStyle.submit_btn}>
                        Apply changes
                    </button>
                </footer>
            </div>
        </>
    );
};

export default Settings;
