import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionPlatoComponent } from './descripcion-plato.component';

describe('DescripcionPlatoComponent', () => {
  let component: DescripcionPlatoComponent;
  let fixture: ComponentFixture<DescripcionPlatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescripcionPlatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionPlatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
