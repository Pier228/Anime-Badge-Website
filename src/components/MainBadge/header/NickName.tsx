import styles from "@/styles/mainBadge/main-badge-header.module.scss";
import { Permanent_Marker } from "next/font/google";

const inter = Permanent_Marker({
    weight: "400",
    subsets: ["latin"],
});

const NickName = ({ name }: { name: string }) => {
    return (
        <h1 className={styles.title + " " + inter.className}>
            {name}
        </h1>
    );
};

export default NickName;
