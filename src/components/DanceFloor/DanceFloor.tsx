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
                    height={215}
                    width={300}
                    quality={100}
                    style={{objectFit:'contain'}}
                    unoptimized
                />
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default DanceFloor;
