import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Header/header.component';
import { Topheader } from './topheader/topheader';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,Topheader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = "Mani's Ekart";
}
