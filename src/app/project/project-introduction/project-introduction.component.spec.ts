import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectIntroductionComponent } from './project-introduction.component';

describe('ProjectDetailsComponent', () => {
  let component: ProjectIntroductionComponent;
  let fixture: ComponentFixture<ProjectIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectIntroductionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
