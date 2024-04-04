import styles from "@/styles/loader/loader.module.scss";

const Loader = () => {
    return (
        <div className={styles.loader_badge_container}>
            <span className={styles.loader} />
        </div>
    );
};

export default Loader;
