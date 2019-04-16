import { PipeTransform, Pipe } from "@angular/core";
import { Hotel } from "./hotel/hotel.model";

@Pipe({
    name : 'filtroBusca'
})
export class HotelPipe implements PipeTransform {
    transform(hoteis: Hotel[], busca: string) : Hotel[]{
        if (!hoteis || !busca) {
            return hoteis;
        }        
        
        return hoteis.filter(hoteis => hoteis.precoPromocional.toString().indexOf(busca) !== -1) ;
        
    }
}