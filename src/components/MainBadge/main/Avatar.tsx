import Image from "next/image";
import styles from "@/styles/mainBadge/main-badge-content.module.scss";
import Corner from "./Corner";
import Loader from "@/components/Loader/Loader";

const Avatar = ({ src }: { src: string | undefined }) => {
  return (
    <div className={styles.avatar}>
      <Corner classNameProp="corner_right_top" />
      <Corner classNameProp="corner_left_top" />
      <Corner classNameProp="corner_left_bottom" />
      <Corner classNameProp="corner_right_bottom" />
      {src ? (
        <Image src={src} alt="Avatar" width={300} height={300} priority />
      ) : (
        <div className={styles.avatar_placeholder}>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Avatar;
