import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(private http: HttpClient, private router: Router) {

   }

   login(email: string, password: string): Observable<{token: string}> {
    // Nota que estamos retornando el Observable aquí en lugar de suscribirnos
    return this.http.post<{token: string}>('https://viajerosupao.onrender.com/api/v1/auth/login', {email, password});
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    // Aquí puedes añadir lógica adicional para validar la estructura del token si es necesario
    return !!token;
  }

  logout(): void {
    // Elimina el token del almacenamiento local o la cookie donde se guarda
    localStorage.removeItem('token');
    // Navega al usuario a la página de inicio o login
    this.router.navigate(['/login']);
  }
}
