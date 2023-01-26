import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  BACKEND_API_URL="https://backend-workshop35-production.up.railway.app/api/bgg/games-ng";
  
  constructor(private httpClient: HttpClient) { }
  
  getGames(limit : number , offset: number): Observable<Game[]>{
    const params = new HttpParams()
      .set("limit", limit)
      .set("offset", offset);

    const headers = new HttpHeaders()
      .set("content-type", "application/json")
      .set("Access-Control-Allow-Origin", "*");
      
    return this.httpClient.get<Game[]>(this.BACKEND_API_URL, 
                {params: params, headers: headers});
  }

}
