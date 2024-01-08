import Image from "next/image";
import styles from "@/styles/badge/main-badge-content.module.scss";
import Corner from "./Corner";

const Avatar = () => {
    return (
        <div className={styles.avatar}>
            <Corner classNameProp="corner_right_top" />
            <Corner classNameProp="corner_left_top" />
            <Corner classNameProp="corner_left_bottom" />
            <Corner classNameProp="corner_right_bottom" />
            <Image
                src="/images/avatar.jpg"
                alt="Avatar"
                width={300}
                height={300}
            />
        </div>
    );
};

export default Avatar;
