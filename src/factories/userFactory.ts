import { faker } from "@faker-js/faker";
import { Factory } from "fishery";
import {
  UserAllInformation,
  UserRegisterCredentials,
  UserState,
} from "../redux/features/userSlice/types";

const WithAllInformation = Factory.define<UserAllInformation>(() => ({
  username: faker.internet.userName(),
  password: faker.internet.password(12),
  id: faker.random.alphaNumeric(10),
  email: faker.internet.email(),
  token: faker.random.alphaNumeric(10),
}));

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

export const getRandomUserWithAllInformation = () => WithAllInformation.build();
export const getRandomUserState = () => randomUserState.build();
export const getRandomUserCredentials = () => randomUserCredentials.build();
