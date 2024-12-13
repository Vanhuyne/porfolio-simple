import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterProfileComponent } from './twitter-profile.component';

describe('TwitterProfileComponent', () => {
  let component: TwitterProfileComponent;
  let fixture: ComponentFixture<TwitterProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwitterProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwitterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
