import { Component } from '@angular/core';
import { HeaderComponent } from './components/shared/header/header.component';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/shared/footer/footer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, RouterOutlet, Footer],
})
export class AppComponent {
  title = 'rate-my-landlord';
}
