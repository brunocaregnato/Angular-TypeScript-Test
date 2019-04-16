import { Observable } from "rxjs/Observable";
import { Quarto } from "./quarto/quarto.model";
import { Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map'
import { APP_API } from "../app.api";
import { Injectable } from "@angular/core";

//classe de serviços que tras os dados de forma dinamica
@Injectable()
export class QuartosService {
    constructor(private http: Http) { }

    quartos(): Observable<Quarto[]> {
        return this.http.get(`${APP_API}/quartos`)
            .map(response => response.json())
    }
}
