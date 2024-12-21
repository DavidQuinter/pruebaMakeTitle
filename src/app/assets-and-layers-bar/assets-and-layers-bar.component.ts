import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-assets-and-layers-bar',
  imports: [ButtonComponent],
  templateUrl: './assets-and-layers-bar.component.html',
  styleUrl: './assets-and-layers-bar.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AssetsAndLayersBarComponent {
  holaMundo(): void{
    console.log("hola mundo")
  }

}
