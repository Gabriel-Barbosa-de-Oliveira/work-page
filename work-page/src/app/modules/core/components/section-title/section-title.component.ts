import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'work-page-section-title',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.scss'
})
export class SectionTitleComponent {

  @Input() title!: string;

}
