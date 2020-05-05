export interface IAuthor {
  name: string;
  birthYear: Date;
  deathYear: Date;
}

export class Author implements IAuthor {
  name: string;
  birthYear: Date;
  deathYear: Date;

  public constructor(authorConfig: IAuthor) {
    this.name = authorConfig.name;
    this.birthYear = authorConfig.birthYear;
    this.deathYear = authorConfig.deathYear;
  }
}
