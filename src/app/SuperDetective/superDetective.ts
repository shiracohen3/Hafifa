import {Detective} from "../Detective/Detective";

export class superDetective extends Detective{

  constructor(superId: number, superName: string, superSpec: string, superCases: number) {
    super(superId,superName,superSpec,superCases);
  }

  public timeForSolveCase(level: number): number {
    return (level/this.cases)/2;
  }
}
