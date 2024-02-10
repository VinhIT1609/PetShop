/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Header_masterComponent } from './header_master.component';

describe('Header_masterComponent', () => {
  let component: Header_masterComponent;
  let fixture: ComponentFixture<Header_masterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Header_masterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Header_masterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
