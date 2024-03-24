import styles from "@/styles/404/404.module.scss";
import Link from "next/link";
import type { Metadata } from "next/types";
import btn_styles from "../styles/buttons/buttons.module.scss";

export const metadata: Metadata = {
    title: "Page not found",
    description: "Page not found",
};

const NotFound = () => {
    return (
        <>
            <Link href="/" className={btn_styles.left_btn}>
                Back to main
            </Link>
            <h1 className={styles.text}>Page not found</h1>
        </>
    );
};

export default NotFound;