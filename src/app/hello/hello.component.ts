import { Component, Input } from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <h1>{{ HOME.hello }} {{ name }}!</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  name: string = "Localize Router";
}
