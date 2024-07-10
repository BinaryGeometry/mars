import { Component } from "@angular/core";

import { AnalogWelcomeComponent } from "./analog-welcome.component";

@Component({
  selector: "mars-home",
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: ` <mars-analog-welcome /> `,
})
export default class HomeComponent {}
