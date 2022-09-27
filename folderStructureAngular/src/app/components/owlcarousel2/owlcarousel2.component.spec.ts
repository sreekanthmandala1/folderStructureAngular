import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Owlcarousel2Component } from './owlcarousel2.component';

describe('Owlcarousel2Component', () => {
  let component: Owlcarousel2Component;
  let fixture: ComponentFixture<Owlcarousel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Owlcarousel2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Owlcarousel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
