import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quarto } from './quarto/quarto.model';
import { QuartosService } from './quartos.services';

@Component({
  selector: 'app-quartos',
  templateUrl: './quartos.component.html'
})

export class QuartosComponent implements OnInit {
  idHotel;
  quartos: Quarto[];

  constructor(private router: ActivatedRoute, private quartosServices: QuartosService) { }

  ngOnInit() {
    this.quartosServices.quartos().subscribe(quartos => this.quartos = quartos)

    this.router.params.subscribe((objeto: any) => {
      this.idHotel = objeto.id;
      //this.idHotel = objeto['id'];
    })

  }
}
