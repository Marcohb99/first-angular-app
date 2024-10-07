import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCreditsComponent } from './item-credits.component';

describe('ItemCreditsComponent', () => {
  let component: ItemCreditsComponent;
  let fixture: ComponentFixture<ItemCreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCreditsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
