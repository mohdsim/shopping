import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewAllCatogariesPage } from './view-all-catogaries.page';

describe('ViewAllCatogariesPage', () => {
  let component: ViewAllCatogariesPage;
  let fixture: ComponentFixture<ViewAllCatogariesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewAllCatogariesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
