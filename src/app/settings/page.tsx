import type { Metadata } from "next/types";
import styles from "../../styles/settings/settings.module.scss";
import btn_styles from "../../styles/buttons/buttons.module.scss";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Settings",
    description: "Create your own anime badge",
};

const Settings = () => {
    return (
        <>
            <Link href="/" className={btn_styles.left_btn}>
                Back to main
            </Link>
            <h1 className={styles.alert_text}>In developing</h1>
        </>
    );
};

export default Settings;
