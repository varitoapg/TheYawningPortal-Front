import { faker } from "@faker-js/faker";
import { Factory } from "fishery";
import {
  UserRegisterCredentials,
  UserState,
} from "../redux/features/userSlice/types";

const randomUserState = Factory.define<UserState>(() => ({
  id: faker.random.alphaNumeric(10),
  isLogged: false,
  token: faker.random.alphaNumeric(10),
  username: faker.internet.userName(),
}));

const randomUserCredentials = Factory.define<UserRegisterCredentials>(() => ({
  email: faker.internet.email(),
  password: faker.internet.password(12),
  username: faker.internet.userName(),
}));

export const getRandomUserState = () => randomUserState.build();
export const getRandomUserCredentials = () => randomUserCredentials.build();
