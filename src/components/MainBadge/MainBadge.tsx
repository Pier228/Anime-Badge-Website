import MainBadgeFooter from "./footer/MainBadgeFooter";
import MainBadgeHeader from "./header/MainBadgeHeader";
import MainContainer from "./main/MainContainer";
import styles from "@/styles/mainBadge/main-badge.module.scss";
import Image from "next/image";

const Main = () => {
    return (
        <div className={styles.container}>
            <Image
                src="/images/katana.png"
                width={200}
                height={200}
                alt="Katana"
                className={styles.katana_img_top}
            />
            <MainBadgeHeader />
            <MainContainer />
            <MainBadgeFooter />
        </div>
    );
};

export default Main;
