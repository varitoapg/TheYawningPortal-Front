import CreateForm from "../../components/CreateForm/CreateForm";
import Header from "../../components/Header/Header";
import CreatePageStyled from "./CreatePageStyled";

const CreatePage = () => {
  return (
    <>
      <Header />
      <CreatePageStyled>
        <CreateForm />
      </CreatePageStyled>
    </>
  );
};

export default CreatePage;
