export class Alert {
  title: string;
  text: string;
  type: string;
  cssClass: string;

  constructor(title: string, text: string, type: string, cssClass: string) {
    this.text = text;
    this.title = title;
    this.type = type;
    this.cssClass = cssClass;
  }
}
