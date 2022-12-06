import { useEffect } from "react";
import useCharacter from "../../hooks/useCharacter/useCharacter";
import {
  filterClassActionCreator,
  moveToNextPageActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Button from "../Button/Button";
import CharacterCard from "../CharacterCard/CharacterCard";
import CharacterCardListStyled from "./CharacterCardListStyled";

const CharacterCardList = (): JSX.Element => {
  const { allCharacters, total } = useAppSelector((state) => state.characters);
  const {
    pages: { currentPage, isNextPage },
    filter,
  } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();
  const { getUserCharacters } = useCharacter();

  useEffect(() => {
    getUserCharacters(currentPage, filter);
  }, [currentPage, filter, getUserCharacters]);

  const nextPage = () => {
    getUserCharacters(currentPage + 1, filter);
    dispatch(moveToNextPageActionCreator());
  };

  const filterCharacters = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(filterClassActionCreator(event.target.value));
  };

  return (
    <CharacterCardListStyled>
      <div className="filter-class-container">
        <label className="filter-class__label" htmlFor="characterClass">
          class:
        </label>
        <select
          className="filter-class__input"
          onChange={filterCharacters}
          id="characterClass"
        >
          <option value="all">-- select class --</option>
          <option value="artificer">artificer</option>
          <option value="barbarian">barbarian</option>
          <option value="warlock">warlock</option>
          <option value="fighter">fighter</option>
          <option value="monk">monk</option>
          <option value="druid">druid</option>
          <option value="rogue">rogue</option>
          <option value="cleric">cleric</option>
          <option value="ranger">ranger</option>
          <option value="wizard">wizard</option>
          <option value="sorcerer">sorcerer</option>
          <option value="bard">bard</option>
          <option value="paladin">paladin</option>
        </select>
      </div>
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
