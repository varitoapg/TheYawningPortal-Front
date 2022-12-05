import useToken from "../../hooks/useToken/useToken";
import { useAppSelector } from "../../redux/hooks";
import Layout from "../Layout/Layout";
import Loading from "../Loading/Loading";
import Modal from "../Modal/Modal";
import AppStyled from "./AppStyled";

const App = () => {
  const {
    isLoading,
    modal: { text, isError, isOpen },
  } = useAppSelector((state) => state.ui);

  const { getToken } = useToken();
  getToken();

  return (
    <AppStyled>
      <Layout />
      {isLoading && <Loading />}
      {isOpen && <Modal isError={isError} text={text} />}
    </AppStyled>
  );
};

export default App;
