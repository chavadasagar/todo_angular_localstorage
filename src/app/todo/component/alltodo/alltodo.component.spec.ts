import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltodoComponent } from './alltodo.component';

describe('AlltodoComponent', () => {
  let component: AlltodoComponent;
  let fixture: ComponentFixture<AlltodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlltodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlltodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
