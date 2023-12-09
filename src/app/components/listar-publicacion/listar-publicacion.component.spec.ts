import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPublicacionesComponent } from './listar-publicacion.component';

describe('ListarPublicacionComponent', () => {
  let component: ListarPublicacionesComponent;
  let fixture: ComponentFixture<ListarPublicacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPublicacionesComponent]
    });
    fixture = TestBed.createComponent(ListarPublicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
