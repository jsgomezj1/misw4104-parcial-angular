import { Routes } from '@angular/router';
import { UsuarioListComponent } from './features/usuarios/usuario-list/usuario-list.component';
import { RepositorioDetailComponent } from './features/repositorios/repositorio-detail/repositorio-detail.component';
import { RepositorioListComponent } from './features/repositorios/repositorio-list/repositorio-list.component';

export const routes: Routes = [
    { path: '', component: UsuarioListComponent },
    { path: 'repositorios', component: RepositorioListComponent },
    { path: 'repositorio/:id', component: RepositorioDetailComponent }
];
