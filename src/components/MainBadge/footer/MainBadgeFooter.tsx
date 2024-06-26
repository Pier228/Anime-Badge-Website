import styles from "@/styles/mainBadge/main-badge-footer.module.scss";
import { Noto_Sans_Javanese } from "next/font/google";
import Image from "next/image";
import ToolBar from "./TaskBar";
import Placeholder from "@/components/Placeholder/Placeholder";

const footer_title = Noto_Sans_Javanese({
  subsets: ["javanese"],
  weight: "700",
});

const MainBadgeFooter = ({ bottomText }: { bottomText: string | undefined }) => {
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
        {bottomText || <Placeholder width="12rem" height={5} />}
      </div>
    </footer>
  );
};

export default MainBadgeFooter;
