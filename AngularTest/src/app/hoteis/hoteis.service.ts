import { Observable } from "rxjs/Observable";
import { Hotel } from "./hotel/hotel.model";
import { Http, HttpModule} from '@angular/http';
import 'rxjs/add/operator/map'
import { APP_API } from "../app.api";
import { Injectable } from "@angular/core";


//classe de serviços que tras os dados de forma dinamica
@Injectable()
export class HoteisService {
    constructor(private http: Http){}

    hoteis(): Observable<Hotel[]>{
        return this.http.get(`${APP_API}/hoteis`)
        .map(response => response.json())
    }
}