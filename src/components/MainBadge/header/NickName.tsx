import styles from "@/styles/badge/main-badge-header.module.scss";
import { Permanent_Marker } from "next/font/google";

const inter = Permanent_Marker({
    weight: "400",
});

const NickName = ({ name }: { name: string }) => {
    return (
        <h1 className={styles.title + " " + inter.className}>
            {name.length < 15 ? name : "Name"}
        </h1>
    );
};

export default NickName;
