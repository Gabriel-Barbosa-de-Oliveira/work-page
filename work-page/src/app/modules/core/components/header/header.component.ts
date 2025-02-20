import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'work-page-header',
  imports: [RouterModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  public customBackground: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event & { target: Document }): void {
    const scrollTop = event.target.documentElement.scrollTop;
    if (scrollTop > 100) {
      this.setCustomBackground()
    } else {
      this.clearCustomBackground()
    }
  }

  private clearCustomBackground() {
    this.customBackground = false;
  }

  private setCustomBackground() {
    this.customBackground = true;
  }



  public scrollIntoView(sectionId: string) {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ block: 'end', behavior: 'smooth' })
  }

}
