import { Icon } from "./icon";

export class SoftwareTool {

  icon: Icon;
  link: string;
  name: string;

  constructor(src: string, alt: string, link: string, name: string) {
    this.icon = new Icon(src, alt);
    this.link = link;
    this.name = name;
  }
}
