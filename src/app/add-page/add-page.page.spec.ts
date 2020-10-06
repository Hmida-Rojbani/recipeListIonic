import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddPagePage } from './add-page.page';

describe('AddPagePage', () => {
  let component: AddPagePage;
  let fixture: ComponentFixture<AddPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
