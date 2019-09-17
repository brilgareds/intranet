import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualesUComponent } from './manuales-u.component';

describe('ManualesUComponent', () => {
  let component: ManualesUComponent;
  let fixture: ComponentFixture<ManualesUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualesUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualesUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
