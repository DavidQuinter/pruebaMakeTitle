import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectCustomizationPanelComponent } from './object-customization-panel.component';

describe('ObjectCustomizationPanelComponent', () => {
  let component: ObjectCustomizationPanelComponent;
  let fixture: ComponentFixture<ObjectCustomizationPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectCustomizationPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectCustomizationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
