import styles from "@/styles/badge/main-badge-header.module.scss";
import Clock from "./Clock";
import NickName from "./NickName";
import QRCode from "./QRCode";

const Header = () => {
    return (
        <div className={styles.header}>
            <Clock />
            <NickName name="Name" />
            <QRCode />
        </div>
    );
};

export default Header;
