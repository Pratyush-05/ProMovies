import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TvshowsService {
  constructor(private http: HttpClient) {}
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'a2a47c343a06d7a790b75e1782df5bb5';
  getTv(type: string = 'popular') {
    return this.http.get(`${this.baseUrl}/tv/${type}?api_key=${this.apiKey}`);
  }
}
