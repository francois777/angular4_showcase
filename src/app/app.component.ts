import { Component } from '@angular/core';

//Animations
import {
  trigger,
  animate,
  state,
  style,
  transition
} from '@angular/animations';

@Component({
  selector: 'angular4_showcase',
  templateUrl: './app.component.html',
  host: {
    '[@routerAnimation]': 'true'
  },
  animations: [
    trigger('routerAnimation', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})

export class AppComponent {
}
