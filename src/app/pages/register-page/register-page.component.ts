import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  forms!: FormGroup;

  constructor(private fb:FormBuilder){
    this.crearFormulario();
  }

  get nombreNoValido(){

    return this.forms.get('nombre')?.invalid && this.forms.get('nombre')?.touched;
  }

  get apellidoNoValido(){

    return this.forms.get('apellido')?.invalid && this.forms.get('apellido')?.touched;
  }

  get sexoNoValido(){

    return this.forms.get('sexo')?.invalid && this.forms.get('sexo')?.touched;
  }

  get fechaNoValido(){

    return this.forms.get('fecha')?.invalid && this.forms.get('fecha')?.touched;
  }

  get correoNoValido(){

    return this.forms.get('correo')?.invalid && this.forms.get('correo')?.touched;
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




  crearFormulario(){

    this.forms = this.fb.group({
      nombre:['', Validators.required],
      apellido:['', Validators.required],
      sexo:['', Validators.required],
      fecha:['', Validators.required],
      correo:['', [Validators.required , Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ['', Validators.required],
      paisOrigen: ['', Validators.required],
      paisVive: ['', Validators.required]
    },{

      Validators:this.passwordIguales('password','passwordConfirm')

    }
    )

  }

  registrar(){

    console.log(this.forms);
    this.invalidConfirm();

    if(this.forms.invalid){

      return Object.values(this.forms.controls).forEach(control =>{
        control.markAllAsTouched();
      })

    }
  }

  invalidConfirm(){
    const pass1 = this.forms.get('password')?.value;
    const pass2 = this.forms.get('passwordConfirm')?.value;

    if(pass1 !== pass2){
        return true;
    }else{
      return true;
    }
  }

  passwordIguales(pass1name:string, pass2name:string){
    return(formGroup:FormGroup)=>{
      const pass1Control = formGroup.get(pass1name);
      const pass2Control = formGroup.get(pass2name);

      if(pass1Control?.value === pass2Control?.value){

        pass2Control?.setErrors(null);

      }else{
        pass2Control?.setErrors({noEsIgual:true})
      }
    }
  }

}