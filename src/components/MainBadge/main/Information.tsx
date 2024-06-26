import Loader from "@/components/Loader/Loader";
import IProfile from "@/interfaces/IProfile";
import styles from "@/styles/mainBadge/main-badge-content.module.scss";
import loader_styles from "@/styles/loader/loader.module.scss"

const Information = ({ name, age, description, gender }: IProfile) => {
  return (
    <>
      <div className={styles.info_container}>
        {name && (
          <p>
            Name: <span>{name}</span>
          </p>
        )}
        {age && (
          <p>
            Age: <span>{age}</span>
          </p>
        )}
        {gender && (
          <p>
            Gender: <span>{gender}</span>
          </p>
        )}
        {description && (
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        )}
      </div>
      {!name && (
        <div className={loader_styles.wrapper}>
          <Loader />
        </div>
      )}
    </>
  );
};

export default Information;
