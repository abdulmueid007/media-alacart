import { Pipe, PipeTransform, inject } from '@angular/core';
import { LangService } from '../services/lang.service';

@Pipe({ name: 'translate', standalone: true, pure: false })
export class TranslatePipe implements PipeTransform {
  private lang = inject(LangService);

  transform(key: string): string {
    return this.lang.translate(key);
  }
}
