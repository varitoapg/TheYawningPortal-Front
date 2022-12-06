import { useEffect } from "react";
import Button from "../../components/Button/Button";
import CharacterCardList from "../../components/CharacterCardList/CharacterCardList";
import Header from "../../components/Header/Header";
import useCharacter from "../../hooks/useCharacter/useCharacter";
import {
  filterClassActionCreator,
  getPagesActionCreator,
  moveToNextPageActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import selectOptions from "../../utils/selectOptions";
import HomePageStyled from "./HomePageStyled";

const HomePage = () => {
  const { getUserCharacters } = useCharacter();
  const dispatch = useAppDispatch();
  const { currentPage, isNextPage } = useAppSelector((state) => state.ui.pages);
  const filter = useAppSelector((state) => state.ui.filter);

  const filterCharacters = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(filterClassActionCreator(event.target.value));
    dispatch(
      getPagesActionCreator({
        currentPage: 0,
        isNextPage: true,
      })
    );
  };

  useEffect(() => {
    getUserCharacters(currentPage, filter);
  }, [currentPage, filter, getUserCharacters]);

  return (
    <>
      <Header />
      <HomePageStyled>
        <div className="filter-class-container">
          <label className="filter-class__label" htmlFor="characterClassFilter">
            class:
          </label>
          <select
            onChange={filterCharacters}
            className="filter-class__input"
            id="characterClassFilter"
          >
            {selectOptions.map((option) =>
              option === "all" ? (
                <option value={`${option}`}>-- select class --</option>
              ) : (
                <option value={`${option}`}>{`${option}`}</option>
              )
            )}
          </select>
        </div>
        <CharacterCardList />
        <Button
          children={"Load more"}
          isDisable={!isNextPage}
          action={() => dispatch(moveToNextPageActionCreator())}
          ariaLabel="Load more characters"
        />
      </HomePageStyled>
    </>
  );
};

export default HomePage;
