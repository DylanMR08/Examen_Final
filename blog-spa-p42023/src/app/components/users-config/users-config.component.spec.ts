import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersConfigComponent } from './users-config.component';

describe('UsersConfigComponent', () => {
  let component: UsersConfigComponent;
  let fixture: ComponentFixture<UsersConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersConfigComponent]
    });
    fixture = TestBed.createComponent(UsersConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
