import styles from "@/styles/mainBadge/main-badge-header.module.scss";
import Clock from "./Clock";
import NickName from "./NickName";
import QRCode from "./QRCode";

const Header = () => {
    return (
        <header className={styles.header}>
            <Clock />
            <NickName name="Name" />
            <QRCode />
        </header>
    );
};

export default Header;
