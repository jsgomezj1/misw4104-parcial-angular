import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuarioListComponent } from './features/usuarios/usuario-list/usuario-list.component';
import { RepositorioListComponent } from "./features/repositorios/repositorio-list/repositorio-list.component";

@Component({
  selector: 'app-root',
  imports: [UsuarioListComponent, RepositorioListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('github-viewer');
}
