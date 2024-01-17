import Image from "next/image";
import styles from "@/styles/mainBadge/main-badge-content.module.scss";

const Corner = ({ classNameProp }: { classNameProp: string }) => {
    return (
        <Image
            src="/images/corner.png"
            alt="corner"
            width={20}
            height={20}
            className={styles[classNameProp]}
        />
    );
};

export default Corner;
