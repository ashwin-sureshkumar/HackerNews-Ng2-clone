/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HnStoryComponent } from './hn-story.component';

describe('HnStoryComponent', () => {
  let component: HnStoryComponent;
  let fixture: ComponentFixture<HnStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HnStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HnStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
