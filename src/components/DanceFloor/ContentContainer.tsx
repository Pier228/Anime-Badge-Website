import { IContentContainerFull } from "@/interfaces/IContentContainer";
import styles from "@/styles/danceFloor/content-container.module.scss";
import Image from "next/image";

const ContentContainer = ({
  src,
  name,
  selectedName,
  onChange,
  data,
}: IContentContainerFull) => {
  const handleChange = () => {
    onChange({ name, src, ...(data && { data }) });
  };

  return (
    <label
      className={
        styles.container +
        ` ${selectedName === name && styles.selected_container}`
      }
    >
      <input
        type="radio"
        name={name}
        onChange={handleChange}
        checked={selectedName === name}
      />
      <Image
        src={src}
        fill
        alt={name}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: "cover" }}
        unoptimized
      />
      <p className={styles.caption}>{name}</p>
    </label>
  );
};

export default ContentContainer;
