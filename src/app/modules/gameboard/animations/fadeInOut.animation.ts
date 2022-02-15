import { animate, state, style, transition, trigger } from"@angular/animations";
export const fadeInOut = [trigger('fadeInOut', [
      state('void', style({opacity: 0})),
      state('*', style({opacity: 1})),
      transition(':enter', [animate('250ms')]),
      transition(':leave', [animate('250ms')])
    ])];