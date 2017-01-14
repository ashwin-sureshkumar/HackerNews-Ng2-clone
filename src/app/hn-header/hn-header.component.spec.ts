/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HnHeaderComponent } from './hn-header.component';

describe('HnHeaderComponent', () => {
  let component: HnHeaderComponent;
  let fixture: ComponentFixture<HnHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HnHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HnHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should contain nav elements (new|comments|show|ask|jobs)', () => {
  //   const de = fixture.debugElement.query(By.css('nav > ul li'));
  //   console.log(de.nativeElement);
  // });
});
