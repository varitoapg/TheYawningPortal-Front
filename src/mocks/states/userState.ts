import { UserState } from "../../redux/features/userSlice/types";

export const mockUserInitialState: UserState = {
  id: "",
  isLogged: false,
  token: "",
  username: "",
};
