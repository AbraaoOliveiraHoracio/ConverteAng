import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverteComponent } from './converte.component';

describe('ConverteComponent', () => {
  let component: ConverteComponent;
  let fixture: ComponentFixture<ConverteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConverteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConverteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
