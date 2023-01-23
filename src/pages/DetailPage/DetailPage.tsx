import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailCharacter from "../../components/DetailCharacter/DetailCharacter";
import Header from "../../components/Header/Header";
import useCharacter from "../../hooks/useCharacter/useCharacter";
import { filterClassActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import DetailPageStyled from "./DetailPageStyled";

const DetailPage = () => {
  window.scrollTo(0, 0);
  const { idCharacter } = useParams();
  const { getCharacterById } = useCharacter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    getCharacterById(idCharacter!);
    dispatch(filterClassActionCreator("all"));
  }, [dispatch, getCharacterById, idCharacter]);

  const { currentCharacter } = useAppSelector((state) => state.characters);
  return (
    <>
      <Header />
      <DetailPageStyled>
        <DetailCharacter character={currentCharacter} />
      </DetailPageStyled>
    </>
  );
};

export default DetailPage;
