export enum Classes {
  "Artificer",
  "Warlock",
  "Barbarian",
  "Fighter",
  "Monk",
  "Druid",
  "Rogue",
  "Cleric",
  "Ranger",
  "Wizard",
  "Bard",
  "Paladin",
}

export interface Character {
  name: string;
  race: string;
  class: Classes;
  image: string;
  imageBackup: string;
  stats: {
    speed: number;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
  background: string;
  details: string;
  isAlive: boolean;
  createdBy: string;
}

export interface CharacterState {
  characters: Character[];
}
