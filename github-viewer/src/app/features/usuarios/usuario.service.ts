import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    private apiURL: string = environment.usersUrl;

constructor(private http:HttpClient) { }
    getUsuarios():Observable<Usuario[]> {
        return this.http.get<Usuario[]>(this.apiURL);
    }
}
