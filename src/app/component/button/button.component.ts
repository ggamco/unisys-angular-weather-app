import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: '<button class="btn {{buttonClass}}">{{label}}</button>',
  styles: []
})
export class ButtonComponent {
  @Input() buttonClass?: string;
  @Input() label?: string;

}
