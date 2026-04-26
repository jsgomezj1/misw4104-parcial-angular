import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuarioListComponent } from './features/usuarios/usuario-list/usuario-list.component';

@Component({
  selector: 'app-root',
  imports: [UsuarioListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('github-viewer');
}
