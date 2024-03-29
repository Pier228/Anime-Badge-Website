import styles from "@/styles/mainBadge/main-badge-footer.module.scss";
import { Noto_Sans_Javanese } from "next/font/google";
import Image from "next/image";
import ToolBar from "./TaskBar";
import useData from "@/hooks/useData";

const footer_title = Noto_Sans_Javanese({
    subsets: ["javanese"],
    weight: "700",
});

const MainBadgeFooter = () => {
    const data = useData();

    return (
        <footer className={styles.footer}>
            <Image
                src="/images/internet.svg"
                alt="Internet icon"
                width={40}
                height={40}
                className={styles.internet_icon}
            />
            <ToolBar />
            <div className={footer_title.className + " " + styles.footer_title}>
                {data?.bottomText || "ウクライナに栄光あれ"}
            </div>
        </footer>
    );
};

export default MainBadgeFooter;
