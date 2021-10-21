import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanalUnoComponent } from './canal-uno.component';

describe('CanalUnoComponent', () => {
  let component: CanalUnoComponent;
  let fixture: ComponentFixture<CanalUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanalUnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanalUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
