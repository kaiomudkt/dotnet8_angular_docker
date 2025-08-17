import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Header } from "../header/header";
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'


@Component({
  selector: 'app-home-component',
  imports: [Header, RouterLink, NgOptimizedImage],
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
