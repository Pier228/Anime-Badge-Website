"use client";
import ICharacterSettings from "@/interfaces/ICharacterSettings";
import Window from "../Window/Window";
import { useEffect, useState } from "react";
import { IContentContainer } from "@/interfaces/IContentContainer";
import { ICharacter } from "@/interfaces/ICharacter";
import ContentContainer from "../DanceFloor/ContentContainer";

const CharacterSettings = ({
  state,
  setState,
  selectedObject,
  setSelectedObject,
}: ICharacterSettings) => {
  const [selectedName, setSelectedName] = useState<IContentContainer | null>(
    null
  );
  const [charactersData, setCharactersData] = useState<null | ICharacter[]>(
    null
  );
  const [page, setPage] = useState(1);

  const setCharacter = () => {
    if (selectedName) {
      setSelectedObject(selectedName);
    }
    setState(false);
  };

  const handleChange = (obj: IContentContainer) => {
    setSelectedName(obj);
  };

  useEffect(() => setSelectedName(selectedObject), [selectedObject]);

  useEffect(() => {
    fetch(`https://graphql.anilist.co`, {
      method: "POST",
      body: JSON.stringify({
        query: `query{characters:Page(page:${page},perPage:49){characters(sort:SEARCH_MATCH){name{full} image{large} description(asHtml:true) age gender}}}`,
        variables: { type: "CHARACTERS" },
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json?.data?.characters?.characters) {
          setCharactersData(json?.data?.characters?.characters);
        } else {
          throw new Error("Error in fetching characters data! Invalid data");
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    state && (
      <Window
        setState={setState}
        data={charactersData}
        buttonText="Choose character"
        nickName="Character Settings"
        setSelectedData={setCharacter}
        children={charactersData?.map(
          (character: ICharacter, index: number) => (
            <ContentContainer
              src={character.image.large}
              name={character.name.full}
              onChange={handleChange}
              selectedName={selectedName?.name || null}
              key={index}
              data={character}
            />
          )
        )}
      />
    )
  );
};

export default CharacterSettings;
