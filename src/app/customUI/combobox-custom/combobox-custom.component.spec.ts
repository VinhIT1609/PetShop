import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboboxCustomComponent } from './combobox-custom.component';

describe('ComboboxCustomComponent', () => {
  let component: ComboboxCustomComponent;
  let fixture: ComponentFixture<ComboboxCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComboboxCustomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComboboxCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
