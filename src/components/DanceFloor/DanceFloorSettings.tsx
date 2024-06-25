"use client";
import styles from "@/styles/danceFloor/dance-floor-settings.module.scss";
import ContentContainer from "./ContentContainer";
import { useEffect, useState } from "react";
import { IContentContainer } from "@/interfaces/IContentContainer";
import IDanceFloorCharacter from "@/interfaces/IDanceFloorCharacter";
import CircleButton from "../Buttons/CircleButton";
import AddCustomPanel from "./AddCustomPanel";
import Caching from "@/services/CachingService";
import IDanceFloorSettings from "@/interfaces/IDanceFloorSettings";
import Window from "../Window/Window";

const DanceFloorSettings = ({
  state,
  setState,
  setSelectedObject,
  selectedObject,
}: IDanceFloorSettings) => {
  const [selectedName, setSelectedName] = useState<IContentContainer | null>(
    null
  );
  const [danceFloorData, setDanceFloorData] = useState<
    null | IDanceFloorCharacter[]
  >(null);
  const [isAddPanelVisible, setAddPanelVisibility] = useState(false);
  const [customImages, setCustomImages] = useState<IContentContainer[] | []>(
    []
  );

  useEffect(() => {
    fetch(`/api/getDanceFloorData`, { next: { revalidate: 10800 } })
      .then((res) => res.json())
      .then((json) => setDanceFloorData(json))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const fetchCustomImages = async () => {
      let customImages = await Caching.getData("danceFloorCustom");
      if (customImages) {
        setCustomImages(customImages);
      }
    };

    fetchCustomImages();
  }, []);

  useEffect(() => setSelectedName(selectedObject), [selectedObject]);

  const handleChange = (obj: IContentContainer) => {
    setSelectedName(obj);
  };

  const setDanceFloor = () => {
    if (selectedName) {
      setSelectedObject(selectedName);
    }
    setState(false);
  };

  return (
    state && (
      <Window
        setState={setState}
        data={danceFloorData}
        buttonText="Choose image"
        nickName="Dance Floor"
        setSelectedData={setDanceFloor}
        header={
          isAddPanelVisible && (
            <AddCustomPanel
              setVisibility={setAddPanelVisibility}
              addCustomImages={setCustomImages}
              customImages={customImages}
            />
          )
        }
        children={
          <>
            <div className={styles.add_button_container}>
              <CircleButton
                onClick={() => setAddPanelVisibility(true)}
                children={<span>+</span>}
              />
            </div>
            {customImages.map(
              (character, index) =>
                character && (
                  <ContentContainer
                    src={character.src}
                    name={character.name}
                    onChange={handleChange}
                    selectedName={selectedName?.name || null}
                    key={index}
                  />
                )
            )}
            {danceFloorData?.map(
              (character: IDanceFloorCharacter, index: number) => (
                <ContentContainer
                  src={character.src}
                  name={character.name}
                  onChange={handleChange}
                  selectedName={selectedName?.name || null}
                  key={index}
                />
              )
            )}
          </>
        }
      />
    )
  );
};

export default DanceFloorSettings;
