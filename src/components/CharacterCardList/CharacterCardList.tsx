import { useEffect } from "react";
import useCharacter from "../../hooks/useCharacter/useCharacter";
import { useAppSelector } from "../../redux/hooks";
import CharacterCard from "../CharacterCard/CharacterCard";
import CharacterCardListStyled from "./CharacterCardListStyled";

const CharacterCardList = (): JSX.Element => {
  const characters = useAppSelector((state) => state.characters.characters);
  const { getUserCharacters } = useCharacter();

  useEffect(() => {
    getUserCharacters();
  }, [getUserCharacters]);

  return (
    <CharacterCardListStyled>
      {characters.map((character) => (
        <CharacterCard character={character} key={character.name} />
      ))}
    </CharacterCardListStyled>
  );
};

export default CharacterCardList;
