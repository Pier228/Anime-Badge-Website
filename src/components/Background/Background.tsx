import styles from "../../styles/background/background.module.scss";

const Background = () => {
    return (
        <video
            autoPlay
            muted
            loop
            preload="none"
            className={styles.animated_background}
        >
            <source src="/videos/night-sky.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default Background;
