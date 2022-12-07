import { useAppSelector } from "../../redux/hooks";
import CharacterCard from "../CharacterCard/CharacterCard";
import CharacterCardListStyled from "./CharacterCardListStyled";

const CharacterCardList = (): JSX.Element => {
  const { allCharacters, total } = useAppSelector((state) => state.characters);

  return (
    <CharacterCardListStyled>
      {total === 0 ? (
        <h2 className="empty-warning">
          Sorry, you still don't have characters
        </h2>
      ) : (
        <>
          <h2 className="total-characters">{`Total of ${total} characters`}</h2>
          <div className="content-container">
            <ul className="characters-list">
              {allCharacters.map((character) => (
                <CharacterCard character={character} key={character.name} />
              ))}
            </ul>
          </div>
        </>
      )}
    </CharacterCardListStyled>
  );
};

export default CharacterCardList;
