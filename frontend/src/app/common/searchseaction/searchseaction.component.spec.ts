import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchseactionComponent } from './searchseaction.component';

describe('SearchseactionComponent', () => {
  let component: SearchseactionComponent;
  let fixture: ComponentFixture<SearchseactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchseactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchseactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
