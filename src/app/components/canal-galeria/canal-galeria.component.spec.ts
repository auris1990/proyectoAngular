import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanalGaleriaComponent } from './canal-galeria.component';

describe('CanalGaleriaComponent', () => {
  let component: CanalGaleriaComponent;
  let fixture: ComponentFixture<CanalGaleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanalGaleriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanalGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
