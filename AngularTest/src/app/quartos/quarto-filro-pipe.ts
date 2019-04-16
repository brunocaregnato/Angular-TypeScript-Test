import { PipeTransform, Pipe } from "@angular/core";
import { Quarto } from "./quarto/quarto.model";
import { QuartosComponent } from "./quartos.component";

@Pipe({
    name: 'filtroBuscaQuarto'
})

export class QuartoPipe implements PipeTransform {
    transform(quartos: Quarto[], busca: string, hotelId: string): Quarto[] {

        if (!quartos || !busca) {
            return quartos;
        }

        return quartos.filter(quartos => ((quartos.preco.toString().indexOf(busca) !== -1) || 
        (quartos.descricao.toString().indexOf(busca) !== -1)) && quartos.idHotel.toString().indexOf(hotelId));

    }
}