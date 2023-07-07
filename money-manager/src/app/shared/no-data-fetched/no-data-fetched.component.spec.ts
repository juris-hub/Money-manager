import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDataFetchedComponent } from './no-data-fetched.component';

describe('NoDataFetchedComponent', () => {
  let component: NoDataFetchedComponent;
  let fixture: ComponentFixture<NoDataFetchedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoDataFetchedComponent]
    });
    fixture = TestBed.createComponent(NoDataFetchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
