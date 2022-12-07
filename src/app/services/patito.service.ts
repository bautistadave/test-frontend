import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patito } from '../models/patito.model';

const baseURL = `http://localhost:8080/api`
@Injectable({
  providedIn: 'root'
})
export class PatitoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Patito[]> {
    return this.http.get<Patito[]>(`${baseURL}/patitos`)
  }

  create(patito: Patito): Observable<Patito> {
    return this.http.post<Patito>(`${baseURL}/patito`, patito);
  }
    
  getByUuid(id: number): Observable<Patito> {
    return this.http.get<Patito>(`${baseURL}/${id}`)
  }

  update(id: number, data: Patito): Observable<Patito> {
    return this.http.put<Patito>(`${baseURL}/${id}`, data);
  }

  delete(id: any): Observable<Patito> {
    return this.http.delete<Patito>(`${baseURL}/${id}`);
  }

  
}
