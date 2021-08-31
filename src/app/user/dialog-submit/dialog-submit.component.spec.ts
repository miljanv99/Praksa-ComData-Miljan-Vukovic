import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSubmitComponent } from './dialog-submit.component';

describe('DialogUnosComponent', () => {
  let component: DialogSubmitComponent;
  let fixture: ComponentFixture<DialogSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
