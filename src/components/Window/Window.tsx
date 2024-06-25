import IWindow from "@/interfaces/IWindow";
import styles from "@/styles/danceFloor/dance-floor-settings.module.scss";
import NickName from "../MainBadge/header/NickName";
import rounded_btn from "@/styles/buttons/rounded-button.module.scss";
import Loader from "../Loader/Loader";
import submit_btn from "@/styles/buttons/submit-button.module.scss";

const Window = ({
  setState,
  data,
  buttonText,
  children,
  header,
  nickName,
  setSelectedData
}: IWindow) => {
  return (
      <>
        <div className={styles.background} onClick={() => setState(false)} />
        <div className={styles.container}>
          <div className={styles.title}>
            <NickName name={nickName} />
          </div>
          <button
            className={rounded_btn.right_btn}
            onClick={() => setState(false)}
          >
            Close
          </button>
          {header}
          {data ? (
            <div className={styles.images_container}>
              {children}
            </div>
          ) : (
            <Loader />
          )}

          <button
            className={submit_btn.submit_btn + ` ${styles.submit_btn_position}`}
            onClick={setSelectedData}
          >
            {buttonText}
          </button>
        </div>
      </>
    )
};

export default Window;
