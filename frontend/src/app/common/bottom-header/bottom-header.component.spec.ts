import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomHeaderComponent } from './bottom-header.component';

describe('BottomHeaderComponent', () => {
  let component: BottomHeaderComponent;
  let fixture: ComponentFixture<BottomHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
