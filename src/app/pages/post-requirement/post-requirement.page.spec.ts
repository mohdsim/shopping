import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostRequirementPage } from './post-requirement.page';

describe('PostRequirementPage', () => {
  let component: PostRequirementPage;
  let fixture: ComponentFixture<PostRequirementPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PostRequirementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
