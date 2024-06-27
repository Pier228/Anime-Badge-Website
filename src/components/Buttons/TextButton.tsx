import ITextButton from "@/interfaces/ITextButton";
import styles from "@/styles/buttons/text-button.module.scss";

const TextButton = ({ caption, onClick }: ITextButton) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {caption}
    </button>
  );
};

export default TextButton;
