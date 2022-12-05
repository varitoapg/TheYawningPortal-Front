import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailCharacter from "../../components/DetailCharacter/DetailCharacter";
import Header from "../../components/Header/Header";
import useCharacter from "../../hooks/useCharacter/useCharacter";
import { useAppSelector } from "../../redux/hooks";
import DetailPageStyled from "./DetailPageStyled";

const DetailPage = () => {
  const { idCharacter } = useParams();
  const { getCharacterById } = useCharacter();

  useEffect(() => {
    getCharacterById(idCharacter!);
  }, [getCharacterById, idCharacter]);

  const currentCharacter = useAppSelector(
    (state) => state.characters.currentCharacter
  );

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
