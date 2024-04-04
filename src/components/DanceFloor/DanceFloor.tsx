import useData from "@/hooks/useData";
import styles from "@/styles/danceFloor/dance-floor.module.scss";
import Image from "next/image";
import Loader from "../Loader/Loader";

const DanceFloor = () => {
    const data = useData();

    return (
        <div className={styles.container}>
            {data?.danceFloor?.src ? (
                <Image
                    alt={data?.danceFloor?.name}
                    src={data?.danceFloor?.src}
                    height={220}
                    width={200}
                    quality={100}
                />
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default DanceFloor;
