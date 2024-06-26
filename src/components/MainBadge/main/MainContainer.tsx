import styles from "@/styles/mainBadge/main-badge-content.module.scss";
import Avatar from "./Avatar";
import Information from "./Information";
import { IMainContainer } from "@/interfaces/IMainContainer";

const MainContainer = ({ name, src, data }: IMainContainer) => {
  return (
    <main className={styles.container}>
      <Avatar src={src} />
      <Information
        name={name || ""}
        age={data?.age || ""}
        description={data?.description || ""}
        gender={data?.gender}
      />
    </main>
  );
};

export default MainContainer;
