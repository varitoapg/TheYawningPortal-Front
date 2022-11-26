import Header from "../../components/Header/Header";
import NotFound from "../../components/NotFound/NotFound";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = () => {
  return (
    <>
      {" "}
      <Header />
      <NotFoundPageStyled>
        <NotFound />
      </NotFoundPageStyled>
    </>
  );
};

export default NotFoundPage;
