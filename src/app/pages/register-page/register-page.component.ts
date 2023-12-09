import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})




export class RegisterPageComponent {
  forms!: FormGroup;
  imageUrl!: string;

  constructor(private fb:FormBuilder, private http: HttpClient){
    this.crearFormulario();

  }

  onFileSelected(event: Event) {
    const element = event.target as HTMLInputElement;
    const file = element.files ? element.files[0] : null;
    if (file) {
      // Aquí deberías subir el archivo a tu servicio de almacenamiento de archivos
      // y luego asignar la URL obtenida a `this.imageUrl`.
      // Simularemos una URL como ejemplo:
      this.imageUrl = 'https://example.com/path/to/image.jpg';
    }
  }

  get nombreNoValido(){

    return this.forms.get('nombre')?.invalid && this.forms.get('nombre')?.touched;
  }

  get apellidoNoValido(){

    return this.forms.get('apellidos')?.invalid && this.forms.get('apellidos')?.touched;
  }

  get sexoNoValido(){

    return this.forms.get('sexo')?.invalid && this.forms.get('sexo')?.touched;
  }

  get fechaNoValido(){

    return this.forms.get('fecha')?.invalid && this.forms.get('fecha')?.touched;
  }

  get correoNoValido(){

    return this.forms.get('email')?.invalid && this.forms.get('email')?.touched;
  }

  get contrasenaNoValido(){

    return this.forms.get('password')?.invalid && this.forms.get('password')?.touched;
  }

  get paisOrigenNoValido(){

    return this.forms.get('paisOrigen')?.invalid && this.forms.get('paisOrigen')?.touched;
  }

  get paisViveNoValido(){

    return this.forms.get('paisVive')?.invalid && this.forms.get('paisVive')?.touched;
  }

  get tipoNoValido(){

    return this.forms.get('tipo')?.invalid && this.forms.get('tipo')?.touched;
  }

  




  crearFormulario(){

    this.forms = this.fb.group({
      nombre:['', Validators.required],
      apellidos:['', Validators.required],
      Sexo:['', Validators.required],
      fechaNacimiento:['', Validators.required],
      email:['', [Validators.required , Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      paisOrigen: ['', Validators.required],
      paisVive: ['', Validators.required],
      tipoViajero: ['', Validators.required],
      fotoPerfilUrl: [''],
      descripcion: ['']
    })

  }

  registrar(){

    console.log(this.forms);

    if(this.forms.valid){

      const formData = this.forms.value;
      this.http.post('http://localhost:8080/api/v1/auth/registrar', formData, {responseType: 'text'}).subscribe(
        response => {
          console.log(response);
          alert(response);
        },
        error => {
          console.log(error.status, error.error)
            alert(error.error)
        }
        
      )

    }
  }
  

}