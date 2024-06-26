import IChooseInput from "@/interfaces/IChooseInput";
import styles from "@/styles/buttons/input-button.module.scss";

const ChooseInput = (props: IChooseInput) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        type="text"
        value={props.text}
        readOnly
        className={styles.input}
        name={props.text}
        placeholder={props.placeholder}
      />
      <button onClick={props.onClick} className={styles.chooseButton}>
        Choose
      </button>
    </div>
  );
};

export default ChooseInput;
