import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { IntroComponent } from '../../components/intro/intro.component';
import { CompaniesComponent } from "../../components/companies/companies.component";
import { SkillSetComponent } from "../../components/skill-set/skill-set.component";
import { ContactComponent } from "../../components/contact/contact.component";

@Component({
  selector: 'work-page-main',
  imports: [CommonModule,
    HeaderComponent,
    IntroComponent, CompaniesComponent, SkillSetComponent, ContactComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  standalone: true
})
export class MainComponent {

}
