import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-span',
  template: '<span style="color: {{color}};">{{label}}</span>',
  styles: []
})
export class SpanComponent {  
  @Input() label?: string;
  @Input() color?: string;
}
