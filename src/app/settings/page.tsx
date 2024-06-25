"use client";
import styles from "@/styles/settings/settings.module.scss";
import badgeStyle from "@/styles/mainBadge/main-badge.module.scss";
import NickName from "@/components/MainBadge/header/NickName";
import Image from "next/image";
import submit_btn from "@/styles/buttons/submit-button.module.scss";
import Background from "@/components/Background/Background";
import useToggleButton from "@/hooks/useToggleButton";
import Parameter from "@/components/Settings/Parameter";
import ToggleButton from "@/components/Settings/ToggleButton";
import InputField from "@/components/Settings/InputField";
import Alert from "@/components/Alerts/Alert";
import { useEffect, useRef, useState } from "react";
import Caching from "@/services/CachingService";
import useData from "@/hooks/useData";
import LinkButton from "@/components/Buttons/LinkButton";
import useWeatherData from "@/hooks/useWeatherData";
import Cursor from "@/components/Cursor/Cursor";
import DanceFloorSettings from "@/components/DanceFloor/DanceFloorSettings";
import ChooseInput from "@/components/Buttons/ChooseInput";
import { IContentContainer } from "@/interfaces/IContentContainer";
import useAlert from "@/hooks/useAlert";

const Settings = () => {
  const data = useData();
  const weatherData = useWeatherData();
  const {
    isBackgroundVisible,
    isCursorEffect,
    changeBackgroundVisibility,
    changeCursorVisibility,
  } = useToggleButton();
  const {
    alertVisibility,
    alertMessage,
    alertColor,
    setAlertVisibility,
    setAlertMessage,
    setAlertColor,
  } = useAlert();

  const [danceFloorVisibility, setDanceFloorVisibility] = useState(false);
  const [selectedDanceFloor, setSelectedDanceFloor] =
    useState<IContentContainer | null>(null);

  useEffect(() => {
    data?.danceFloor && setSelectedDanceFloor(data?.danceFloor);
  }, [data?.danceFloor?.name, data?.danceFloor?.src]);

  const nickname = useRef<HTMLInputElement>(null);
  const bottomText = useRef<HTMLInputElement>(null);
  const background = useRef<HTMLInputElement>(null);
  const cursorEffect = useRef<HTMLInputElement>(null);

  const applyChanges = () => {
    if (nickname.current?.value && bottomText.current?.value) {
      Caching.cacheData("anime-badge-data", {
        ...data,
        nickname: nickname.current?.value,
        bottomText: bottomText.current?.value,
        background: background.current?.checked,
        cursorEffect: cursorEffect.current?.checked,
        danceFloor: selectedDanceFloor ? selectedDanceFloor : data?.danceFloor,
      });
      setAlertColor("green");
      setAlertMessage("Settings successfully applied!");
      setAlertVisibility(true);
    } else {
      setAlertColor("red");
      setAlertMessage("Error! Failed to apply settings!");
      setAlertVisibility(true);
    }
  };

  return (
    <>
      <DanceFloorSettings
        setSelectedObject={setSelectedDanceFloor}
        state={danceFloorVisibility}
        setState={setDanceFloorVisibility}
        selectedObject={selectedDanceFloor}
      />
      <Cursor cursorEffectVisible={isCursorEffect} />
      {isBackgroundVisible && <Background />}
      {alertVisibility && (
        <Alert
          message={alertMessage}
          color={alertColor}
          isVisible={alertVisibility}
          setVisibility={setAlertVisibility}
        />
      )}
      <LinkButton
        href="/"
        text="Back to main"
        image_src="/images/home.png"
        classNames="left_btn"
      />

      <div className={badgeStyle.container_35}>
        <Image
          src="/images/katana.png"
          width={200}
          height={200}
          alt="Katana"
          className={badgeStyle.katana_img_top}
        />
        <header>
          <NickName name="Settings" />
        </header>
        <main className={styles.main}>
          <Parameter
            name="Character"
            children={
              <ChooseInput
                text={data?.character || ""}
                onClick={() => console.warn("This function in development")}
              />
            }
          />
          <Parameter
            name="Nickname"
            children={
              <InputField
                value={data?.nickname || ""}
                inputRef={nickname}
                placeholder="Enter Nickname"
                maxLength={16}
              />
            }
          />
          <Parameter
            name="Bottom text"
            children={
              <InputField
                value={data?.bottomText || ""}
                inputRef={bottomText}
                placeholder="Enter bottom text"
                maxLength={20}
              />
            }
          />
          <Parameter
            name="Dance floor"
            children={
              <ChooseInput
                text={selectedDanceFloor?.name || data?.danceFloor?.name || ""}
                onClick={() => setDanceFloorVisibility(true)}
              />
            }
          />
          <Parameter
            name="Background"
            children={
              <ToggleButton
                ref={background}
                isChecked={isBackgroundVisible}
                changeStatus={changeBackgroundVisibility}
              />
            }
          />
          <Parameter
            name="Cursor Effect"
            children={
              <ToggleButton
                ref={cursorEffect}
                isChecked={isCursorEffect}
                changeStatus={changeCursorVisibility}
              />
            }
          />
          <Parameter
            name="Location"
            children={<p>{weatherData?.location.name || data?.location}</p>}
          />
        </main>
        <footer className={styles.footer}>
          <button className={submit_btn.submit_btn} onClick={applyChanges}>
            Apply changes
          </button>
        </footer>
      </div>
    </>
  );
};

export default Settings;
