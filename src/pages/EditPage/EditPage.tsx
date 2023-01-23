import CreateForm from "../../components/CreateForm/CreateForm";
import Header from "../../components/Header/Header";

import EditPageStyled from "./EditPageStyled";

const EditPage = () => {
  return (
    <>
      <Header />
      <EditPageStyled>
        <CreateForm isEdit={true} />
      </EditPageStyled>
    </>
  );
};

export default EditPage;
