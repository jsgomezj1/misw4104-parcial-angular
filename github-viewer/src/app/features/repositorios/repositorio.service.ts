import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Repositorio } from './repositorio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositorioService {
    private apiURL: string = environment.repositoriesUrl;

constructor(private http: HttpClient) {}
    getRepositorios():Observable<Repositorio[]> {
        return this.http.get<Repositorio[]>(this.apiURL);
    }
 }

