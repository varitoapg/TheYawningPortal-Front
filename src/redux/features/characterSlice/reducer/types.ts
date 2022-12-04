export interface Character {
  id: string;
  name: string;
  race: string;
  characterClass: string;
  image: string | File;
  imageBackup: string;
  speed: number;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  background: string;
  details: string;
  isAlive: boolean;
  createdBy: string;
}

export interface CharacterState {
  characters: Character[];
}

export interface CharacterForm {
  name: string;
  race: string;
  characterClass: string;
  image: string | File;
  imageBackup?: string;
  speed: number;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  background: string;
  details: string;
}
