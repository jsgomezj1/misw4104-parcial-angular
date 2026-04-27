import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuarioListComponent } from './features/usuarios/usuario-list/usuario-list.component';
import { RepositorioListComponent } from "./features/repositorios/repositorio-list/repositorio-list.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [UsuarioListComponent, RepositorioListComponent,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  activeTab = 'usuarios';
  protected readonly title = signal('github-viewer');
}
