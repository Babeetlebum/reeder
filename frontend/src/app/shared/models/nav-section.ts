export class NavSection {
  public name: string;
  public url: string;
  public subsections?: NavSection[] = [];
  public parent?: NavSection;

  public constructor(name: string, url: string) {
    this.name = name;
    this.url = url;
  }

  public addSubsection(navsection: NavSection): NavSection {
    const alreadyExists = this.subsections.find(
      ss => ss.name === navsection.name || ss.url === navsection.url
    );
    if (alreadyExists == null) {
      navsection.parent = this;
      this.subsections.push(navsection);
    } else {
      throw new Error(
        `subsection already exists (${alreadyExists.name} / ${
          alreadyExists.url
        })`
      );
    }

    return this;
  }
}
