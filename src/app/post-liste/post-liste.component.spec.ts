import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListeComponent } from './post-liste.component';

describe('PostListeComponent', () => {
  let component: PostListeComponent;
  let fixture: ComponentFixture<PostListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
