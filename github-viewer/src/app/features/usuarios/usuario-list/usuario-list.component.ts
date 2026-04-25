import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  imports: [CommonModule],
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuarios: Array<Usuario> = [];


  constructor(private usuarioService: UsuarioService) { }

  getUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe((data: Usuario[]) => {
      console.log(data);
      this.usuarios = data;
    });
  }

  ngOnInit() {
    this.getUsuarios();
  }

}
