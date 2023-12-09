import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  forms!: FormGroup;


  constructor(private fb:FormBuilder, private router: Router, private authService: AuthService){
    this.crearFormulario();

  }

  get correoNoValido(){

    return this.forms.get('email')?.invalid && this.forms.get('email')?.touched;
  }

  get contrasenaNoValido(){

    return this.forms.get('password')?.invalid && this.forms.get('password')?.touched;
  }

  crearFormulario(){

    this.forms = this.fb.group({
      email:['', Validators.required ],
      password: ['', Validators.required],
    })

  }

  iniciarSesion() {
    if (this.forms.valid) {
      const formData = this.forms.value;
      // Ahora 'login' retorna un Observable, por lo que puedes suscribirte a él
      this.authService.login(formData.email, formData.password).subscribe({
        next: (response) => {
          console.log(response);
          localStorage.setItem('token', response.token); // Almacena el token en localStorage
          alert("Usuario Iniciado Correctamente");
          this.router.navigate(['/principal']);
          console.log(localStorage.getItem('token'))
        },
        error: (error) => {
          console.error('Error en el inicio de sesión', error);
          alert("Error en el inicio de sesión");
        }
      });
    } else {
      // manejo del formulario inválido
    }
  }

}
