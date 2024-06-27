"use client"
import { IContentContainerFull } from "@/interfaces/IContentContainer";
import styles from "@/styles/danceFloor/content-container.module.scss";
import Image from "next/image";
import { useState } from "react";
import DeleteButton from "../Buttons/DeleteButton";

const ContentContainer = ({
  src,
  name,
  selectedImg,
  onChange,
  data,
  deletable,
  deleteHandler,
}: IContentContainerFull) => {
  const [isDeleteButtonVisible, setDeleteButtonVisibility] = useState(false);

  const handleChange = () => {
    onChange({ name, src, ...(data && { data }) });
  };

  return (
    <label
      className={
        styles.container +
        ` ${
          selectedImg?.src === src &&
          selectedImg.name === name &&
          styles.selected_container
        }`
      }
      onMouseOver={() => setDeleteButtonVisibility(true)}
      onMouseOut={() => setDeleteButtonVisibility(false)}
    >
      <input
        type="radio"
        name={name}
        onChange={handleChange}
        checked={selectedImg?.src === src && selectedImg.name === name}
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
      {deletable && isDeleteButtonVisible && (
        <DeleteButton onClick={deleteHandler ?? (() => {})} />
      )}
    </label>
  );
};

export default ContentContainer;
