import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsAndLayersBarComponent } from './assets-and-layers-bar.component';

describe('AssetsAndLayersBarComponent', () => {
  let component: AssetsAndLayersBarComponent;
  let fixture: ComponentFixture<AssetsAndLayersBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetsAndLayersBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetsAndLayersBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
