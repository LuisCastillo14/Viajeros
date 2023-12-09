import { Component, OnInit } from '@angular/core';
import { PublicacionService } from 'src/app/services/publicacion.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-listar-publicacion',
  templateUrl: './listar-publicacion.component.html',
  styleUrls: ['./listar-publicacion.component.scss']
})


export class ListarPublicacionesComponent implements OnInit {
  publicaciones:any[] = [];
  safeUrl: any;

  constructor(private publicacionService: PublicacionService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.publicacionService.obtenerPublicaciones().subscribe(
      (response) => {
        this.publicaciones = response.map(publicacion => ({
          ...publicacion,
          imagenBase64: this.getSafeUrl(publicacion.imagen)
        }));
      },
      (error) => {
        alert('Para buscar una entrada debe iniciar sesión')
      }
    );
  }

  getSafeUrl(base64Image: string): SafeResourceUrl {
    const imageBlobUrl = `data:image/jpeg;base64,${base64Image}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(imageBlobUrl);
  }

  
}