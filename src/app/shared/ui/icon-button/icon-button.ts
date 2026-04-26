import { Component, computed, inject, Input } from '@angular/core';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { IconComponent } from '../icon-component/icon-component';
import { LangService } from '../../../core/services/lang.service';

@Component({
  selector: 'app-icon-button',
  imports: [IconComponent],
  templateUrl: './icon-button.html',
  styleUrl: './icon-button.css',
})
export class IconButton {
  private lang = inject(LangService);
  @Input() iconColor = 'var(--color-text)';

  readonly icon = computed(() => (this.lang.isRtl() ? faArrowLeft : faArrowRight));
}
