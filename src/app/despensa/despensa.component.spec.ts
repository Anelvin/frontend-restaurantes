import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DespensaComponent } from './despensa.component';

describe('DespensaComponent', () => {
  let component: DespensaComponent;
  let fixture: ComponentFixture<DespensaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DespensaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DespensaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
