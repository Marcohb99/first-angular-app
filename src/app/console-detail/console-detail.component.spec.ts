import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleDetailComponent } from './console-detail.component';

describe('ConsoleDetailComponent', () => {
  let component: ConsoleDetailComponent;
  let fixture: ComponentFixture<ConsoleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsoleDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsoleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
