import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RepositorioService } from '../repositorio.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Repositorio } from '../repositorio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-repositorio-detail',
  templateUrl: './repositorio-detail.component.html',
  imports: [CommonModule,RouterModule],
  styleUrls: ['./repositorio-detail.component.css']
})
export class RepositorioDetailComponent implements OnInit {

  repositorio: Repositorio | null= null;

  constructor(
    private repositorioService: RepositorioService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) { }

    getRepositorio(id: string): void {
      this.repositorioService.getRepositorio(id).subscribe((data) => {
        this.repositorio = data;
        this.cdr.detectChanges();
      });

    }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getRepositorio(id);
    }
  }


}
