export class Detective {
  public id: number;
  public name: string;
  public spec: string;
  public cases: number;

  constructor(id: number, name: string, spec: string, cases: number) {
    this.id = id;
    this.name = name;
    this.spec = spec;
    this.cases = cases;
  }

}
