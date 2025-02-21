import { Component } from '@angular/core';
import { SectionTitleComponent } from "../section-title/section-title.component";
import { CommonModule } from '@angular/common';
import { Company } from '../../interfaces/company';
import { Companies } from '../../constants/companies';

@Component({
  selector: 'work-page-companies',
  imports: [SectionTitleComponent, CommonModule],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.scss'
})
export class CompaniesComponent {

  public companies: Array<Company> = Companies;

}
