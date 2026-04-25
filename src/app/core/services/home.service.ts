import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { API_PATHS } from '../constants/api-paths';
import { HomeResponse } from '../model/home.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private url = `${environment.apiBaseUrl}${API_PATHS.HOME}`;

  private http = inject(HttpClient);

  getHomeData(): Observable<HomeResponse[]> {
    return this.http.get<HomeResponse[]>(this.url);
  }
}
