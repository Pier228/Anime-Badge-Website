import styles from "@/styles/badge/main-badge-content.module.scss";
import Avatar from "./Avatar";
import Information from "./Information";

const MainContainer = () => {
    return (
        <main className={styles.container}>
            <Avatar />
            <Information
                name="Monkey D. Luffy"
                age={19}
                birthday="May 5th"
                occupation="Pirate Captain, Emperor, Senior Captain of the Grand Fleet, Prisoner (former), Chore Boy (temporary, former), Bandit (former)"
            />
        </main>
    );
};

export default MainContainer;
