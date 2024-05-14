import { Injectable } from '@angular/core';
import { Pessoa } from '../pessoa';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NovaListaService {
  private apiUrl = 'http://localhost:3000/pessoa';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(this.apiUrl);
  }
}
