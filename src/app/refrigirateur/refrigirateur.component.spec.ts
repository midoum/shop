import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrigirateurComponent } from './refrigirateur.component';

describe('RefrigirateurComponent', () => {
  let component: RefrigirateurComponent;
  let fixture: ComponentFixture<RefrigirateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefrigirateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefrigirateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
