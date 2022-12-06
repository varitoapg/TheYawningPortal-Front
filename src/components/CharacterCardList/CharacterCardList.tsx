import { useEffect } from "react";
import useCharacter from "../../hooks/useCharacter/useCharacter";
import { moveToNextPageActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Button from "../Button/Button";
import CharacterCard from "../CharacterCard/CharacterCard";
import CharacterCardListStyled from "./CharacterCardListStyled";

const CharacterCardList = (): JSX.Element => {
  const { allCharacters, total } = useAppSelector((state) => state.characters);
  const { currentPage, isNextPage } = useAppSelector((state) => state.ui.pages);
  const dispatch = useAppDispatch();
  const { getUserCharacters } = useCharacter();

  useEffect(() => {
    getUserCharacters();
  }, [getUserCharacters]);

  const nextPage = () => {
    getUserCharacters(currentPage + 1);
    dispatch(moveToNextPageActionCreator());
  };

  return (
    <CharacterCardListStyled>
      {allCharacters.length === 0 ? (
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
            <Button
              children={"Load more"}
              isDisable={!isNextPage}
              action={nextPage}
              ariaLabel="Load more characters"
            />
          </div>
        </>
      )}
    </CharacterCardListStyled>
  );
};

export default CharacterCardList;
