import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MenuComponent} from "./shared/menu/menu.component";

@Component({
    selector: 'app-root',
  imports: [CommonModule, RouterOutlet, MenuComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'KlazienavenerYoungtimerVrienden';
}
