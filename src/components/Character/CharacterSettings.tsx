"use client";
import ICharacterSettings from "@/interfaces/ICharacterSettings";
import Window from "../Window/Window";
import { useEffect, useState, useRef, useCallback } from "react";
import { IContentContainer } from "@/interfaces/IContentContainer";
import { ICharacter } from "@/interfaces/ICharacter";
import ContentContainer from "../DanceFloor/ContentContainer";
import Loader from "../Loader/Loader";
import loader_styles from "@/styles/loader/loader.module.scss"

const CharacterSettings = ({
  state,
  setState,
  selectedObject,
  setSelectedObject,
}: ICharacterSettings) => {
  const [selectedName, setSelectedName] = useState<IContentContainer | null>(
    null
  );
  const [charactersData, setCharactersData] = useState<ICharacter[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  const setCharacter = () => {
    if (selectedName) {
      setSelectedObject(selectedName);
    }
    setState(false);
  };

  const handleChange = (obj: IContentContainer) => {
    setSelectedName(obj);
  };

  const fetchCharacters = async (page: number) => {
    setIsLoading(true);
    const response = await fetch(`https://graphql.anilist.co`, {
      method: "POST",
      body: JSON.stringify({
        query: `query{characters:Page(page:${page},perPage:49){characters(sort:SEARCH_MATCH){name{full} image{large} description(asHtml:true) age gender}}}`,
        variables: { type: "CHARACTERS" },
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const json = await response.json();
    if (json?.data?.characters?.characters) {
      setCharactersData((prev) => [
        ...prev,
        ...json.data.characters.characters,
      ]);
    } else {
      throw new Error("Error in fetching characters data! Invalid data");
    }
    setIsLoading(false);
  };

  useEffect(() => setSelectedName(selectedObject), [selectedObject]);

  useEffect(() => {
    fetchCharacters(page);
  }, [page]);

  const lastCharacterElementRef = useCallback((node: HTMLDivElement) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  return (
    state && (
      <Window
        setState={setState}
        data={charactersData}
        buttonText="Choose character"
        nickName="Character Settings"
        setSelectedData={setCharacter}
        children={
          <>
            {charactersData.map((character: ICharacter, index: number) => {
              if (charactersData.length === index + 1) {
                return (
                  <div ref={lastCharacterElementRef} key={index}>
                    <ContentContainer
                      src={character.image.large}
                      name={character.name.full}
                      onChange={handleChange}
                      selectedName={selectedName?.name || null}
                      data={character}
                    />
                  </div>
                );
              } else {
                return (
                  <ContentContainer
                    src={character.image.large}
                    name={character.name.full}
                    onChange={handleChange}
                    selectedName={selectedName?.name || null}
                    key={index}
                    data={character}
                  />
                );
              }
            })}
            {isLoading && (
              <div className={loader_styles.wrapper}>
                <Loader />
              </div>
            )}
          </>
        }
      />
    )
  );
};

export default CharacterSettings;
