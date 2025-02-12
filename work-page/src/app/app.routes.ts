import { Routes } from '@angular/router';
import { MainComponent } from './modules/core/layout/main/main.component';

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/main"
    },
    {
        path: "main",
        component: MainComponent
    }
];
