import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Repositorio } from '../repositorio';
import { RepositorioService } from '../repositorio.service';

@Component({
  selector: 'app-repositorio-list',
  templateUrl: './repositorio-list.component.html',
  imports: [CommonModule],
  styleUrls: ['./repositorio-list.component.css']
})
export class RepositorioListComponent implements OnInit {

    repositorios: Array<Repositorio> = [];
  constructor(private repositorioService: RepositorioService,
    private cdr: ChangeDetectorRef
  ) { }

  getRepositorios(): void {
    this.repositorioService.getRepositorios().subscribe((data: Repositorio[]) => {
      console.log(data);
      this.repositorios = data;
      this.cdr.detectChanges();
    });
  }  

  ngOnInit() {
    this.getRepositorios();
  }

}
