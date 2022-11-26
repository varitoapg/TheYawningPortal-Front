import { UserState } from "../types";
import { userInitialState } from "../userSlice";

const userLogout = (currentUserState: UserState) => ({
  ...userInitialState,
});

export default userLogout;
