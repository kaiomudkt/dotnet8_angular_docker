import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home-component',
  imports: [],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent {
  public readonly title = 'pagina home';
  @Input('entradaProps') entradaPropos: string = 'não entrou';
  @Output() eventoSaida = new EventEmitter<string>();

  submit(){
    this.eventoSaida.emit(this.title);
  }
  
}
