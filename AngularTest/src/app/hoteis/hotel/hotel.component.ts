import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from './hotel.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
})
export class HotelComponent implements OnInit {

  @Input() hotel : Hotel
  constructor(private router: Router) { }

  ngOnInit() {
    
  }
  
  passaHotelID(id: number) {

    this.router.navigate(['/quartos', id]);
  }

}
