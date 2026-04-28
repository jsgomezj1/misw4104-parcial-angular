import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Repositorio } from './repositorio';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositorioService {
    private apiURL: string = environment.repositoriesUrl;

constructor(private http: HttpClient) {}
    getRepositorios():Observable<Repositorio[]> {
        return this.http.get<Repositorio[]>(this.apiURL);
    }
    // getRepositorio(id: string): Observable<Repositorio> {
    //     // var x = this.http.get<Repositorio>(this.apiURL);
    //     // var y = x[0];

        


        
    //     return this.http.get<Repositorio>(`${this.apiURL}/${id}`);
    // }
    

    getRepositorio(id: string): Observable<Repositorio> {
        console.log('id recibido en el servicio: ' + id);
  return this.http.get<Repositorio[]>(this.apiURL).pipe(
    map(repositorios =>
      repositorios.find(repo => repo.id === Number(id))!
    )
  );
}

 }

