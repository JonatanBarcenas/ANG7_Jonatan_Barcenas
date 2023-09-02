import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JonatanBarcenasComponent } from './jonatan-barcenas.component';

describe('JonatanBarcenasComponent', () => {
  let component: JonatanBarcenasComponent;
  let fixture: ComponentFixture<JonatanBarcenasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JonatanBarcenasComponent]
    });
    fixture = TestBed.createComponent(JonatanBarcenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
