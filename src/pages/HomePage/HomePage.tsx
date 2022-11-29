import Header from "../../components/Header/Header";
import HomePageStyled from "./HomePageStyled";

const HomePage = () => {
  return (
    <>
      <Header />
      <HomePageStyled>
        <span>Here you have your pint!</span>
      </HomePageStyled>
    </>
  );
};

export default HomePage;
