import { faker } from "@faker-js/faker";
import { Factory } from "fishery";
import {
  Character,
  Classes,
} from "../redux/features/characterSlice/reducer/types";

const characterFactory = Factory.define<Character>(() => ({
  background: faker.address.city(),
  class: Classes.Barbarian,
  createdBy: faker.database.mongodbObjectId(),
  details: faker.lorem.paragraph(),
  image: faker.image.nature(),
  imageBackup: faker.image.nature(),
  isAlive: faker.datatype.boolean(),
  name: faker.name.fullName(),
  race: faker.animal.cat(),
  stats: {
    charisma: faker.datatype.number({ max: 20 }),
    constitution: faker.datatype.number({ max: 20 }),
    dexterity: faker.datatype.number({ max: 20 }),
    intelligence: faker.datatype.number({ max: 20 }),
    speed: faker.datatype.number({ max: 50 }),
    strength: faker.datatype.number({ max: 20 }),
    wisdom: faker.datatype.number({ max: 20 }),
  },
}));

export const getRandomCharacterList = (number: number) =>
  characterFactory.buildList(number);
