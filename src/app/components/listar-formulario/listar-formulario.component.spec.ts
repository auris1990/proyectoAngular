import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFormularioComponent } from './listar-formulario.component';

describe('ListarFormularioComponent', () => {
  let component: ListarFormularioComponent;
  let fixture: ComponentFixture<ListarFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
