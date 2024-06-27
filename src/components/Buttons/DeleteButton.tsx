import styles from "@/styles/buttons/delete-button.module.scss";
import Image from "next/image";

const DeleteButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <Image
        src="/images/delete.svg"
        alt="close button"
        width={16}
        height={16}
        className={styles.image}
      />
    </button>
  );
};

export default DeleteButton;
