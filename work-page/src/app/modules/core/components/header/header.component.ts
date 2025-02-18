import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'work-page-header',
  imports: [],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  public customBackground: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event & { target: Document }): void {
    const scrollTop = event.target.documentElement.scrollTop;
    if (scrollTop !== 0) {
      this.customBackground = true;
    } else {
      this.customBackground = false;
    }
  }

}
