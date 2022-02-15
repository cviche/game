import { animate, animateChild, query, state, style, transition, trigger } from"@angular/animations";

// Animation that fades in and out.
export const fadeInOut = [trigger('fadeInOut', [
      state('void', style({opacity: 0})),
      state('*', style({opacity: 1})),
      transition(':enter', [animate('250ms')]),
      transition(':leave', [animate('250ms')])
    ])];

// This animation is needed if the component is destroyed and has a parent component
// (Otherwise the animation when the component is destroyed will not be used).
export const container = [trigger('container', [
		transition(':enter, :leave', [
			query('@*', animateChild()),
		]),
	])];