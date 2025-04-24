import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientesListComponent } from './clientes-list.component';
import { ClientesService } from '../../services/clientes.service';
import { of } from 'rxjs';

describe('ClientesListComponent', () => {
  let component: ClientesListComponent;
  let fixture: ComponentFixture<ClientesListComponent>;
  let mockClientesService: any;

  beforeEach(async () => {
    mockClientesService = {
      getClientes: jasmine.createSpy('getClientes').and.returnValue(of([
        { id: 1, nombre: 'Juan Perez', telefono: '56912345678', pais: 'Chile' },
        { id: 2, nombre: 'Maria Lopez', telefono: '56987654321', pais: 'Argentina' }
      ]))
    };

    await TestBed.configureTestingModule({
      declarations: [ClientesListComponent],
      providers: [
        { provide: ClientesService, useValue: mockClientesService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería cargar y mostrar la lista de clientes', () => {
    expect(component.clientes.length).toBe(2);
    expect(component.clientes[0].nombre).toBe('Juan Perez');
  });
});