export interface ICharacter {
  name: { full: string };
  image: { large: string };
  description?: string;
  age?: string | number;
  gender?: string;
}

export interface ICharacterFull {
  data: ICharacter;
  name: string;
  src: string;
}
