import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoTableComponent } from './aluno-table.component';

describe('AlunoTableComponent', () => {
  let component: AlunoTableComponent;
  let fixture: ComponentFixture<AlunoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
