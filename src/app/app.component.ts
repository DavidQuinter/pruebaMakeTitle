import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DesignToolsBarComponent } from './design-tools-bar/design-tools-bar.component';
import { AssetsAndLayersBarComponent } from './assets-and-layers-bar/assets-and-layers-bar.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DesignToolsBarComponent, AssetsAndLayersBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pruebas';

  holaMundo(): void{
    console.log("hola mundo")
  }


}
