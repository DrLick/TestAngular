import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefono',
})
export class TelefonoPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;

    // Formatear el número de teléfono: +569 1234 5678
    const formatted = value.replace(/(\d{4})(\d{4})$/, '$1 $2');
    return formatted;
  }
}