import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cliente {
  id: number;
  nombre: string;
  telefono: string;
  pais: string;
}

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private apiUrl = 'https://api.example.com/clientes'; // Cambia a tu API real.

  constructor(private http: HttpClient) {}

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }
}