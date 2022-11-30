import CharacterCardList from "../../components/CharacterCardList/CharacterCardList";
import Header from "../../components/Header/Header";
import HomePageStyled from "./HomePageStyled";

const HomePage = () => {
  return (
    <>
      <Header />
      <HomePageStyled>
        <CharacterCardList />
      </HomePageStyled>
    </>
  );
};

export default HomePage;
