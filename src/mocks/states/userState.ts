import { UserState } from "../../redux/features/userSlice/types";

export const mockUserInitialState: UserState = {
  id: "",
  isLogged: false,
  token: "",
  username: "",
};

export const mockUserLogged: UserState = {
  id: "",
  isLogged: true,
  token: "",
  username: "",
};
