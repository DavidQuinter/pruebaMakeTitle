import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-design-tools-bar',
  imports: [ButtonComponent],
  templateUrl: './design-tools-bar.component.html',
  styleUrl: './design-tools-bar.component.scss'
})
export class DesignToolsBarComponent {
  texttear(): void{
    console.log("texteo")
  }


  buttons = [
    { action: this.texttear, label: '', icon: 'title' },
    { action: this.texttear, label: '', icon: 'category' },
    { action: this.texttear, label: '', icon: 'stylus_note' },
    { action: this.texttear, label: '', icon: 'photo_library' },
    { action: this.texttear, label: '', icon: 'download' }
  ];

}
