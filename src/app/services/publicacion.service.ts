import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})

export class PublicacionService {
  private apiUrl1 = 'https://viajerosupao.onrender.com/api/publicaciones/crearPublicacion';
  private apiUrl2 = 'https://viajerosupao.onrender.com/api/publicaciones/listar';

  constructor( private http: HttpClient, private authService: AuthService) { }

  
  crearExperiencia(datosExperiencia: FormData): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${token}`
    });
    console.log(`Bearer ${token}`);
    return this.http.post(this.apiUrl1, datosExperiencia, { headers });
  }

  obtenerPublicaciones(): Observable<any[]> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${token}`
    });
    console.log(`Bearer ${token}`);
    return this.http.get<any[]>(this.apiUrl2, {headers });
  }

}
