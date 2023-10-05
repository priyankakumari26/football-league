import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  UrlEndpoints: string = 'https://www.api-football.com/documentation-v3#tag/Leagues/operation/get-leagues'
  urlForIds: string = 'https://v3.football.api-sports.io/soccer/ids';
  
  constructor(
    private http: HttpClient
  ) { }
  // getSampleData(country: string): Observable<any> {
  //   return this.http.post<any>(UrlEndpoints),country);
  // }

  getIdForSelectedCountry(): any {
    return this.http.get<any>(this.urlForIds);
  }


}
