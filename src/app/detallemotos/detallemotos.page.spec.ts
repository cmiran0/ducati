import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetallemotosPage } from './detallemotos.page';

describe('DetallemotosPage', () => {
  let component: DetallemotosPage;
  let fixture: ComponentFixture<DetallemotosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallemotosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetallemotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
