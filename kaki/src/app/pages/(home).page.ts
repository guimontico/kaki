import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'kaki-home',
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: `
     <kaki-analog-welcome/>
  `,
})
export default class HomeComponent {
}
