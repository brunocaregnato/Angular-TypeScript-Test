import { Component, OnInit, Input } from '@angular/core';
import { Quarto } from './quarto.model';

@Component({
  selector: 'app-quarto',
  templateUrl: './quarto.component.html'
})
export class QuartoComponent implements OnInit {

  @Input() quarto : Quarto
  listaDeQuartos : Quarto[]
  constructor() { }

  ngOnInit() {
  }

  MostraDetalhes(){

    var el = this.quarto.idQuarto.toString();

    var display = document.getElementById(el).style.display;
    var botao = document.getElementById("btnDetalhes");

    if(display == "none") document.getElementById(el).style.display = 'block';
    else document.getElementById(el).style.display = 'none';

  }

}
