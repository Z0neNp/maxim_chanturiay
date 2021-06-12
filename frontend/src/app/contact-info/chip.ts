import { Icon } from "./icon";

export class Chip {

  icon: Icon;
  link: string;
  value: string;

  constructor(src: string, alt: string, link: string, value: string) {
    this.icon = new Icon(src, alt);
    this.link = link;
    this.value = value;
  }

  public hasLink(): boolean {
    return this.link.length !== 0;
  }
}
