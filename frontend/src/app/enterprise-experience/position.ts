import { SoftwareTool } from "./software-tool";

export class Position {
  
  end: String
  responsibilities: String[];
  start: String
  softwareTools: SoftwareTool[];
  title: String;

  constructor(
    start: String,
    end: String,
    title: String,
    responsibilities: String[],
    softwareTools: SoftwareTool[]
  ) {
      this.start = start;
      this.end = end;
      this.title = title;
      this.responsibilities = responsibilities;
      this.softwareTools = softwareTools;
  }

  public hasResponsibilities(): Boolean {
    return this.responsibilities.length > 0;
  }

  public hasSoftwareTools(): Boolean {
    return this.softwareTools.length > 0;
  }

}