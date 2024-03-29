import styles from "@/styles/mainBadge/main-badge-header.module.scss";
import Clock from "./Clock";
import NickName from "./NickName";
import QRCode from "./QRCode";
import useData from "@/hooks/useData";

const Header = () => {
    const data = useData();

        return (
        <header className={styles.header}>
            <Clock />
            <NickName name={data?.nickname || 'Name'} />
            <QRCode />
        </header>
    );
};

export default Header;
