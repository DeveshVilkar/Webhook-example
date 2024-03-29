import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISaveData } from '../Interfaces/ISave';
import { EventPayload } from '../Interfaces/EventPayload';

@Injectable({
  providedIn: 'root'
})
export class WebhookserviceService {
  BASE_URL="http://localhost:5000/api/save";
  EMUNATOR_URL="http://localhost:5000/api/eventemulator"
  constructor(private http:HttpClient) { }

  saveData(save:ISaveData):Observable<any>{
    console.log(save);
    return this.http.post(`${this.BASE_URL}`,save);
  }

  emitEvent(eventpayload:EventPayload):Observable<any>{
    console.log(eventpayload)
    return this.http.post(`${this.EMUNATOR_URL}`,eventpayload)
  }


}
