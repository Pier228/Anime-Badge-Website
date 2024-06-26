import styles from "@/styles/mainBadge/main-badge-content.module.scss";
import Avatar from "./Avatar";
import Information from "./Information";
import { ICharacterFull } from "@/interfaces/ICharacter";

const MainContainer = ({name, src, data}: ICharacterFull) => {
  return (
    <main className={styles.container}>
      <Avatar />
      <Information
        name="Monkey D. Luffy"
        age={19}
        description="Pirate Captain, Emperor, Senior Captain of the Grand Fleet, Prisoner (former), Chore Boy (temporary, former), Bandit (former)"
      />
    </main>
  );
};

export default MainContainer;
