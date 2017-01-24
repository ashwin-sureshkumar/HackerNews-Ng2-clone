/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MinStoryComponent } from './min-story.component';

describe('MinStoryComponent', () => {
  let component: MinStoryComponent;
  let fixture: ComponentFixture<MinStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
