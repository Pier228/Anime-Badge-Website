import useData from "@/hooks/useData";
import MainBadgeFooter from "./footer/MainBadgeFooter";
import MainBadgeHeader from "./header/MainBadgeHeader";
import MainContainer from "./main/MainContainer";
import styles from "@/styles/mainBadge/main-badge.module.scss";
import Image from "next/image";

const Main = () => {
  const data = useData();

  return (
    <div className={styles.container}>
      <Image
        src="/images/katana.png"
        width={200}
        height={200}
        alt="Katana"
        className={styles.katana_img_top}
      />
      <MainBadgeHeader nickname={data?.nickname || ''} />
      <MainContainer
        data={data?.character?.data}
        name={data?.character?.name}
        src={data?.character?.src}
      />
      <MainBadgeFooter bottomText={data?.bottomText} />
    </div>
  );
};

export default Main;
