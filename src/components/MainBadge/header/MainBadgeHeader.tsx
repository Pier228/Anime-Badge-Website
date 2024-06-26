import styles from "@/styles/mainBadge/main-badge-header.module.scss";
import Clock from "./Clock";
import NickName from "./NickName";
import QRCode from "./QRCode";

const Header = ({ nickname }: { nickname: string }) => {
  return (
    <header className={styles.header}>
      <Clock />
      <NickName name={nickname} />
      <QRCode />
    </header>
  );
};

export default Header;
