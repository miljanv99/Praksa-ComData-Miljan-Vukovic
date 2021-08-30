import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUnosComponent } from './dialog-unos.component';

describe('DialogUnosComponent', () => {
  let component: DialogUnosComponent;
  let fixture: ComponentFixture<DialogUnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUnosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
