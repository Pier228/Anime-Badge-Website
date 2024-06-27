import styles from "@/styles/badge/add-custom-badge.module.scss";
import submit_btn from "@/styles/buttons/submit-button.module.scss";
import backgroundStyles from "@/styles/danceFloor/dance-floor-settings.module.scss";
import InputField from "../Settings/InputField";
import { useRef } from "react";
import NickName from "../MainBadge/header/NickName";
import Parameter from "../Settings/Parameter";
import IAddCustomPanel from "@/interfaces/IAddCustomPanel";
import Caching from "@/services/CachingService";

const AddCustomPanel = (props: IAddCustomPanel) => {
  const source = useRef<HTMLInputElement>(null);

  const checkUnique = (src: string) =>
    !props.customImages.some((item) => item.src === src) &&
    !props.danceFloorData?.some((item) => item.src === src);

  const addImage = () => {
    if (
      source.current!.value.length < 5 ||
      source.current?.value.slice(0, 4) !== "http" ||
      !checkUnique(source.current?.value)
    ) {
      source.current!.style.borderColor = "rgb(220 38 38)";
    } else {
      let newData = [
        ...props.customImages,
        {
          name: "Custom Image",
          src: source.current!.value,
        },
      ];
      props.addCustomImages(newData);
      Caching.cacheData("danceFloorCustom", newData);
      props.setVisibility(false);
    }
  };

  return (
    <>
      <div
        className={backgroundStyles.background}
        onClick={() => props.setVisibility(false)}
      />
      <div className={styles.badge}>
        <NickName name="Add custom image" />
        <div className={styles.main}>
          <Parameter
            name="Enter source"
            children={
              <InputField
                value=""
                placeholder="Source"
                inputRef={source}
                maxLength={500}
              />
            }
          />
        </div>
        <button
          className={submit_btn.submit_btn + ` ${styles.submit_btn_position}`}
          onClick={() => addImage()}
        >
          Add image
        </button>
      </div>
    </>
  );
};

export default AddCustomPanel;
