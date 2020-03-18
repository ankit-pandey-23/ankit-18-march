import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollslisComponent } from './pollslis.component';

describe('PollslisComponent', () => {
  let component: PollslisComponent;
  let fixture: ComponentFixture<PollslisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollslisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollslisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
