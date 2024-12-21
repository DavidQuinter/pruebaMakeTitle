import { Component, input, Input, Output} from '@angular/core';
import { signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'btn-component',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  imports: [CommonModule],
})
export class ButtonComponent {

  protected labelText = signal<string>('Click me');
  protected iconName = signal<string>("")
  
  @Input() classType: 'btn-primary' | 'btn-secondary' = 'btn-primary';
  @Input() active: boolean = false;
  @Input() action : () => void = () =>{}

  handleClick() : void {
    if(this.action)[
      this.action()
    ]
  }

  get buttonClasses(): string {
    let classes = 'btn';
    classes += ` ${this.classType}`;
    if (this.active) {
      classes += ' active';
    }
    return classes;
  }

  @Input() set label(value: string) {
    this.labelText.set(value);
  }

  @Input() set icon(value: string) {
    this.iconName.set(value);
  }
}
