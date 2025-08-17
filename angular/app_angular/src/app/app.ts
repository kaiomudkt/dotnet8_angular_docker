import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
  ],

  templateUrl: './app.html',
  styleUrl: './app.css',
  
  providers: []
})
export class App {
  protected readonly title = signal('app_angular');

  exibirEvento(event: string) {
    console.log('Evento recebido:', event); 
  }
}
