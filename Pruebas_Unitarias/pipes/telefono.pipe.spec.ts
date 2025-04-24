import { TelefonoPipe } from './telefono.pipe';

describe('TelefonoPipe', () => {
  let pipe: TelefonoPipe;

  beforeEach(() => {
    pipe = new TelefonoPipe();
  });

  it('debería formatear el número de teléfono correctamente', () => {
    const result = pipe.transform('56912345678');
    expect(result).toBe('+569 1234 5678');
  });

  it('debería devolver el mismo valor si no se pasa un número válido', () => {
    const result = pipe.transform('');
    expect(result).toBe('');
  });

  it('debería manejar números de teléfono más cortos de manera segura', () => {
    const result = pipe.transform('12345');
    expect(result).toBe('12345'); // Sin formateo porque no cumple con la longitud esperada
  });

  it('debería devolver el mismo valor si no se pasa un número', () => {
    const result = pipe.transform(null as any);
    expect(result).toBe(null);
  });
});