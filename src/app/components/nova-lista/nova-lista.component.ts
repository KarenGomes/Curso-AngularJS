import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/pessoa';
import { NovaListaService } from 'src/app/services/nova-lista.service';
@Component({
  selector: 'app-nova-lista',
  templateUrl: './nova-lista.component.html',
  styleUrls: ['./nova-lista.component.css']
})
export class NovaListaComponent implements OnInit {
  pessoa: Pessoa[] = [];

  constructor(private novaListaService: NovaListaService) {
    this.getData();
  }

  ngOnInit(): void {
  }

  getData(){
    this.novaListaService.getAll().subscribe((data) => this.pessoa = data);
  }
}
