import { Component, OnInit } from '@angular/core';
import { Hotel } from './hotel/hotel.model';
import { HoteisService } from './hoteis.service';

//componente é responsavel pela regra de negocio
@Component({
  selector: 'app-hoteis',
  templateUrl: './hoteis.component.html'
})

export class HoteisComponent implements OnInit {

  hoteis: Hotel[]
  filtroBusca : string;

  constructor(private hoteisServices: HoteisService) { }

  ngOnInit() {
    this.hoteisServices.hoteis().subscribe(hoteis => this.hoteis = hoteis)
  }

}
