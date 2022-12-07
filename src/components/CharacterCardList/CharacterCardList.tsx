import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import CharacterCard from "../CharacterCard/CharacterCard";
import CharacterCardListStyled from "./CharacterCardListStyled";

const CharacterCardList = (): JSX.Element => {
  const { allCharacters, total } = useAppSelector((state) => state.characters);

  return (
    <CharacterCardListStyled>
      {total === 0 ? (
        <div className="empty-warning">
          <h2 className="empty-warning__title">
            You still don't have characters.
          </h2>
          <span className="empty-warning__text">Wanna create one?</span>
          <Link
            aria-label="Go to Login page"
            className="empty-warning__link"
            to="/create"
          >
            Create
          </Link>
        </div>
      ) : (
        <>
          <span className="total-characters">{`Total of ${total} characters`}</span>
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
