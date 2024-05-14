import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl = 'http://localhost:3000/animals';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Animal[]>{
    console.log('retornando com requisição http')
    return this.http.get<Animal[]>(this.apiUrl);
  }

  remove(id: number){
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`);
  }

  showAge(animal: Animal){
    return `O pet ${animal.name} tem idade ${animal.age}`;
  }

  getItem(id: number): Observable<Animal>{
    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }
}
