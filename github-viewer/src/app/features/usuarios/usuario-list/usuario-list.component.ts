import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { CommonModule } from '@angular/common';
import { UsuarioDetailComponent } from '../usuario-detail/usuario-detail.component';
@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  imports: [CommonModule, UsuarioDetailComponent],
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuarios: Array<Usuario> = [];
  selectedUsuario!: Usuario;
  selected: boolean = false;

  constructor(private usuarioService: UsuarioService,
    private cdr: ChangeDetectorRef
  ) { }

  getUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe((data: Usuario[]) => {
      console.log(data);
      this.usuarios = data;
      this.cdr.detectChanges();
    });
  }

  onSelected(usuario: Usuario): void {
    this.selected=true;
    this.selectedUsuario = usuario;
  }

  ngOnInit() {
    this.getUsuarios();
  }

}
