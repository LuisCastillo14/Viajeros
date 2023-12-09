import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PublicacionService } from 'src/app/services/publicacion.service';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.component.html',
  styleUrls: ['./crear-publicacion.component.scss']
})
export class CrearPublicacionComponent {
  publicacionForm!: FormGroup;
  tipoPublicacion: string = 'experiencia';

  constructor( private fb: FormBuilder, private publicacionService: PublicacionService, private reactive: ReactiveFormsModule) {
    this.publicacionForm = this.fb.group({
      titulo: ['', Validators.required],
      lugar: ['', Validators.required],
      descripcion: ['', Validators.required],
      imagen: [null, Validators.required] // Añade validadores si es necesario
    });
  }

  onSubmit() {
    if (this.publicacionForm.valid) {
      const formData = new FormData();
      formData.append('tipo', "experiencia")
      formData.append('titulo', this.publicacionForm.value.titulo);
      formData.append('lugar', this.publicacionForm.value.lugar);
      formData.append('descripcion', this.publicacionForm.value.descripcion);
      formData.append('imagen', this.publicacionForm.get('imagen')!.value, this.publicacionForm.get('imagen')!.value.name);;

      this.publicacionService.crearExperiencia(formData).subscribe({
        next: (response) => {
          console.log('Publicacion creada con éxito', response);
          alert('publicacion creada correctamente');
        },
        error: (error) => {
          console.log('Ocurrio algun error', error)
        }
      });
    }
  }

  onFileSelected(event: Event) {
    const file = event.target as HTMLInputElement;
    let fileList: FileList | null = file.files;
    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (validImageTypes.includes(file.type)) {
        this.publicacionForm.get('imagen')!.setValue(file);
      } else {
        // Mostrar algún mensaje de error o manejar la validación de tipo de archivo aquí
        alert('Por favor, selecciona una imagen válida (JPEG, PNG, GIF).');
        this.publicacionForm.get('imagen')!.setValue(null); // Resetear el campo de archivo
      }
    }
  }
}
