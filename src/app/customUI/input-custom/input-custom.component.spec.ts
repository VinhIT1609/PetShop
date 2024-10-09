/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InputCustomComponent } from './input-custom.component';

describe('InputCustomComponent', () => {
  let component: InputCustomComponent;
  let fixture: ComponentFixture<InputCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
