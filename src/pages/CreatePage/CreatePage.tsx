import { useEffect } from "react";
import CreateForm from "../../components/CreateForm/CreateForm";
import Header from "../../components/Header/Header";
import { filterClassActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import CreatePageStyled from "./CreatePageStyled";

const CreatePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(filterClassActionCreator("all"));
  }, [dispatch]);
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
