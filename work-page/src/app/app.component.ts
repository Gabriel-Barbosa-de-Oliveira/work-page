import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './modules/core/core.module';
import { HeaderComponent } from './modules/core/components/header/header.component';

@Component({
  selector: 'work-page-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'work-page';
}
