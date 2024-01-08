import styles from "@/styles/badge/main-badge-footer.module.scss";
import Image from "next/image";

const MainBadgeFooter = () => {
    return (
        <footer className={styles.footer}>
            <Image
                src="/images/internet.svg"
                alt="Internet icon"
                width={40}
                height={40}
                className={styles.internet_icon}
            />
        </footer>
    );
};

export default MainBadgeFooter;
